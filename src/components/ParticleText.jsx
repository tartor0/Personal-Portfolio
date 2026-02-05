import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleText({ text = "Frontend Developer" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Wait for font to load
    document.fonts.load('bold 200px "Clash Display"').then(() => {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });

      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);

      camera.position.z = 25;

      // Create canvas to render text
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 2048;
      canvas.height = 512;

      // Draw text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 200px "Clash Display", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const textMetrics = ctx.measureText(text);
      const textWidth = textMetrics.width;
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      // Get pixel data
      const imageData = ctx.getImageData(
        (canvas.width / 2 - textWidth / 2) - 50,
        0,
        textWidth + 100,
        canvas.height
      );
      const pixels = imageData.data;

      let divisor = 50;
      const updateDivisor = () => {
        if (!mountRef.current) return;
        const viewH = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const pxPerU = mountRef.current.clientHeight / viewH;
        divisor = (200 * pxPerU) / 100 || 50; // Scaling logic
      };
      updateDivisor();

      // Create particles
      const pixelTargets = [];
      const positions = [];
      const colors = [];

      for (let y = 0; y < imageData.height; y += 4) {
        for (let x = 0; x < imageData.width; x += 4) {
          const index = (y * imageData.width + x) * 4;
          const alpha = pixels[index + 3];

          if (alpha > 128) {
            pixelTargets.push(x - imageData.width / 2, -(y - imageData.height / 2), 0);
            positions.push((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 20);
            colors.push(0.24, 0.35, 1.0); // Accent blue: #3E5BFF
          }
        }
      }

      const targetPositions = [];
      for (let i = 0; i < pixelTargets.length; i += 3) {
        targetPositions.push(pixelTargets[i] / divisor, pixelTargets[i + 1] / divisor, pixelTargets[i + 2]);
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      particleGeometry.setAttribute('targetPosition', new THREE.Float32BufferAttribute(targetPositions, 3));
      particleGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.15,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);

      const mouse = new THREE.Vector2(-999, -999);
      const handleMouseMove = (e) => {
        const rect = mountRef.current.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      };
      window.addEventListener('mousemove', handleMouseMove);

      let time = 0;
      const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;

        const pos = particleGeometry.attributes.position.array;
        const tPos = particleGeometry.attributes.targetPosition.array;

        for (let i = 0; i < pos.length; i += 3) {
          pos[i] += (tPos[i] - pos[i]) * 0.05 + Math.sin(time + i) * 0.01;
          pos[i + 1] += (tPos[i + 1] - pos[i + 1]) * 0.05 + Math.cos(time + i) * 0.01;
          pos[i + 2] += (tPos[i + 2] - pos[i + 2]) * 0.05;
        }
        particleGeometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        if (!mountRef.current) return;
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
      };
    });
  }, [text]);

  return <div ref={mountRef} className="w-full h-full relative" />;
}