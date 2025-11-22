import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Multi-page PDF generator, with padding for smooth page breaks
export const handleDownloadPDF = async (resumeRef) => {
  if (!resumeRef.current) return;
  await new Promise(res => setTimeout(res, 100));

  const canvas = await html2canvas(resumeRef.current, { scale: 3, useCORS: true });
  const imgWidthPx = canvas.width;
  const imgHeightPx = canvas.height;

  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const mmPerPx = pdfWidth / imgWidthPx;
  const pageHeightPx = pdfHeight / mmPerPx;

  let position = 0;
  const cropPaddingPx = 60; // overlap padding for cleaner splits

  while (position < imgHeightPx) {
    const remainingHeightPx = imgHeightPx - position;
    let captureHeightPx = Math.min(pageHeightPx, remainingHeightPx);

    let cropTop = position;
    let cropBottom = position + captureHeightPx;

    if (position > 0) cropTop = Math.max(0, cropTop - cropPaddingPx);
    if (remainingHeightPx > pageHeightPx) cropBottom = Math.min(imgHeightPx, cropBottom + cropPaddingPx);

    const actualHeightPx = cropBottom - cropTop;

    const pageCanvas = document.createElement('canvas');
    pageCanvas.width = imgWidthPx;
    pageCanvas.height = actualHeightPx;
    pageCanvas.getContext('2d').drawImage(
      canvas,
      0, cropTop, imgWidthPx, actualHeightPx,
      0, 0, imgWidthPx, actualHeightPx
    );
    const pageImgData = pageCanvas.toDataURL('image/png');

    if (position === 0) {
      pdf.addImage(pageImgData, "PNG", 0, 0, pdfWidth, actualHeightPx * mmPerPx);
    } else {
      pdf.addPage();
      pdf.addImage(pageImgData, "PNG", 0, 0, pdfWidth, actualHeightPx * mmPerPx);
    }

    position += captureHeightPx;
  }

  pdf.save("Tartor_Gaadi_Resume.pdf");
};