(() => {
  "use strict";

  const fileName = "Ahmed_Kandil_CV.pdf";
  const chunkCount = 5;
  const chunkVersion = "5";
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

  async function readChunk(number) {
    const path = `assets/cv-data-${String(number).padStart(2, "0")}.js?v=${chunkVersion}`;
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`CV data chunk ${number} returned HTTP ${response.status}.`);

    const text = await response.text();
    const match = text.match(/window\.__cvChunks\[\d+\]\s*=\s*"([A-Za-z0-9+/=]+)"/);
    if (!match) throw new Error(`CV data chunk ${number} has an invalid format.`);
    return match[1];
  }

  function decodeBase64(value) {
    const binary = atob(value.replace(/\s+/g, ""));
    return Uint8Array.from(binary, (character) => character.charCodeAt(0));
  }

  function concatenateBytes(parts) {
    const length = parts.reduce((total, part) => total + part.length, 0);
    const result = new Uint8Array(length);
    let offset = 0;
    parts.forEach((part) => {
      result.set(part, offset);
      offset += part.length;
    });
    return result;
  }

  function decodeChunks(chunks) {
    try {
      return decodeBase64(chunks.join(""));
    } catch (combinedError) {
      try {
        return concatenateBytes(chunks.map(decodeBase64));
      } catch (separateError) {
        throw new Error(`CV data could not be decoded: ${separateError.message}`);
      }
    }
  }

  function isPdf(bytes) {
    return bytes.length >= 5 && String.fromCharCode(...bytes.slice(0, 5)) === "%PDF-";
  }

  async function buildPdfUrl() {
    if (objectUrl) return objectUrl;
    const chunks = await Promise.all(
      Array.from({ length: chunkCount }, (_, index) => readChunk(index + 1))
    );
    const bytes = decodeChunks(chunks);
    if (!isPdf(bytes)) throw new Error("The reconstructed CV is not a valid PDF.");

    objectUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
    return objectUrl;
  }

  async function initialiseCv() {
    const pdfUrl = await buildPdfUrl();
    document.querySelectorAll("[data-cv-download]").forEach((link) => {
      link.href = pdfUrl;
      link.download = fileName;
      link.removeAttribute("aria-disabled");
      link.setAttribute("aria-label", "Download Ahmed Kandil CV as PDF");
    });
    document.querySelectorAll("[data-cv-open]").forEach((link) => {
      link.href = pdfUrl;
      link.target = "_blank";
      link.rel = "noopener";
      link.removeAttribute("aria-disabled");
    });
    document.querySelectorAll("[data-cv-preview]").forEach((frame) => {
      frame.src = pdfUrl;
    });
  }

  initialiseCv().catch((error) => {
    console.error("The CV PDF could not be prepared.", error);
    showError("The CV preview could not load. Please refresh the page and try again.");
  });

  window.addEventListener("beforeunload", () => {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  });
})();
