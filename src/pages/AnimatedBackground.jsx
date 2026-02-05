import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AnimatedBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Subtle Grid-aligned Particles
    const particleCount = 1500;
    const positionsArr = new Float32Array(particleCount * 3);
    const velocitiesArr = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positionsArr[i] = (Math.random() - 0.5) * 25;
      positionsArr[i + 1] = (Math.random() - 0.5) * 25;
      positionsArr[i + 2] = (Math.random() - 0.5) * 10;

      velocitiesArr[i] = (Math.random() - 0.5) * 0.002;
      velocitiesArr[i + 1] = (Math.random() - 0.5) * 0.002;
      velocitiesArr[i + 2] = (Math.random() - 0.5) * 0.001;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArr, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x3E5BFF,
      size: 0.015,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Light Rays / Floating Orbs - More refined for light mode
    const orbs = [];
    const orbColors = [0x3E5BFF, 0x6366F1, 0xFFFFFF];
    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.SphereGeometry(3, 64, 64);
      const material = new THREE.MeshBasicMaterial({
        color: orbColors[i % 3],
        transparent: true,
        opacity: 0.02,
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 8
      );
      sphere.userData.velocity = {
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.001,
      };
      orbs.push(sphere);
      scene.add(sphere);
    }

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update particles
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += velocitiesArr[i];
        positions[i + 1] += velocitiesArr[i + 1];
        positions[i + 2] += velocitiesArr[i + 2];

        if (Math.abs(positions[i]) > 12) velocitiesArr[i] *= -1;
        if (Math.abs(positions[i + 1]) > 12) velocitiesArr[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 5) velocitiesArr[i + 2] *= -1;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y += 0.0001;

      // Update orbs
      orbs.forEach((orb) => {
        orb.position.x += orb.userData.velocity.x;
        orb.position.y += orb.userData.velocity.y;
        orb.position.z += orb.userData.velocity.z;

        if (Math.abs(orb.position.x) > 10) orb.userData.velocity.x *= -1;
        if (Math.abs(orb.position.y) > 10) orb.userData.velocity.y *= -1;
        if (Math.abs(orb.position.z) > 6) orb.userData.velocity.z *= -1;
      });

      // Camera follows mouse with smooth damping
      camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      orbs.forEach((orb) => {
        orb.geometry.dispose();
        orb.material.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'transparent',
      }}
    />
  );
}
