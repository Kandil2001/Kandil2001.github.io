(() => {
  "use strict";
  const fileName = "Ahmed_Kandil_CV.pdf";
  const chunkCount = 5;
  let objectUrl = null;

  function loadChunk(number) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `assets/cv-data-${String(number).padStart(2, "0")}.js?v=1`;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function buildPdfUrl() {
    if (objectUrl) return objectUrl;
    const base64Pdf = window.__cvChunks.join("");
    const binary = atob(base64Pdf);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    objectUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
    return objectUrl;
  }

  Promise.all(Array.from({ length: chunkCount }, (_, i) => loadChunk(i + 1))).then(() => {
    const pdfUrl = buildPdfUrl();
    document.querySelectorAll("[data-cv-download]").forEach((link) => {
      link.href = pdfUrl;
      link.download = fileName;
      link.setAttribute("aria-label", "Download Ahmed Kandil CV as PDF");
    });
    document.querySelectorAll("[data-cv-open]").forEach((link) => {
      link.href = pdfUrl;
      link.target = "_blank";
      link.rel = "noopener";
    });
    document.querySelectorAll("[data-cv-preview]").forEach((frame) => {
      frame.src = pdfUrl;
    });
  }).catch((error) => {
    console.error("The CV PDF could not be prepared.", error);
  });

  window.addEventListener("beforeunload", () => {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  });
})();
