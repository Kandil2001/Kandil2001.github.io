(() => {
  "use strict";

  const fileName = "Ahmed_Kandil_CV.pdf";
  const directPdfUrl = `${fileName}?v=3`;
  const chunkCount = 5;
  const chunkVersion = "3";
  let objectUrl = null;

  function showError(message) {
    document.querySelectorAll("[data-cv-preview]").forEach((frame) => {
      frame.removeAttribute("src");
      frame.setAttribute("title", message);
      if (!frame.nextElementSibling?.classList.contains("cv-error")) {
        frame.insertAdjacentHTML("afterend", `<p class="cv-error" role="alert">${message}</p>`);
      }
    });

    document.querySelectorAll("[data-cv-download], [data-cv-open]").forEach((link) => {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    });
  }

  async function findDirectPdf() {
    try {
      const response = await fetch(directPdfUrl, {
        method: "HEAD",
        cache: "no-store",
      });
      return response.ok ? directPdfUrl : null;
    } catch (error) {
      console.warn("The direct CV file is unavailable; using the embedded fallback.", error);
      return null;
    }
  }

  function loadChunk(number) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `assets/cv-data-${String(number).padStart(2, "0")}.js?v=${chunkVersion}`;
      script.async = false;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`CV data chunk ${number} failed to load.`));
      document.head.appendChild(script);
    });
  }

  async function loadAllChunks() {
    window.__cvChunks = [];
    for (let number = 1; number <= chunkCount; number += 1) {
      await loadChunk(number);
    }

    if (window.__cvChunks.length !== chunkCount || window.__cvChunks.some((chunk) => !chunk)) {
      throw new Error("The CV data is incomplete.");
    }
  }

  function buildEmbeddedPdfUrl() {
    if (objectUrl) return objectUrl;

    const base64Pdf = window.__cvChunks.join("");
    const binary = atob(base64Pdf);
    if (!binary.startsWith("%PDF-")) {
      throw new Error("The reconstructed CV is not a valid PDF.");
    }

    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }

    objectUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
    return objectUrl;
  }

  function connectCvLinks(pdfUrl) {
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
  }

  async function initialiseCv() {
    const directUrl = await findDirectPdf();
    if (directUrl) {
      connectCvLinks(directUrl);
      return;
    }

    await loadAllChunks();
    connectCvLinks(buildEmbeddedPdfUrl());
  }

  initialiseCv().catch((error) => {
    console.error("The CV PDF could not be prepared.", error);
    showError("The CV preview could not load. Please use a refreshed browser tab and try again.");
  });

  window.addEventListener("beforeunload", () => {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  });
})();
