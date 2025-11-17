import { useState, useEffect } from "react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  // Body scroll kontrolü
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // menü açıkken scroll yok
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-regal-navy shadow-md font-sans">
      <div className="flex justify-between items-center p-4">
        <img src="/logo.png" alt="Logo" className="w-16 h-auto rounded-full mb-2" />
        <div className="text-xl font-bold text-white">Becim Oto Kurtarma</div>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col w-6 h-6 justify-between items-center"
        >
          <span className={`h-[2px] w-full bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-[2px] w-full bg-white transition-opacity ${open ? "opacity-0" : ""}`}></span>
          <span className={`h-[2px] w-full bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 flex flex-col justify-center items-center gap-8 text-2xl z-50 text-white bg-regal-navy">
          {/* Sağ üst X */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>

          <img src="/logo.png" alt="Logo" className="w-16 h-auto rounded-full mb-2" />
          <a href="#hero" onClick={() => setOpen(false)}>Ana Sayfa</a>
          <a href="#about" onClick={() => setOpen(false)}>Hakkımızda</a>
          <a href="#services" onClick={() => setOpen(false)}>Hizmetler</a>
          <a href="#contact" onClick={() => setOpen(false)}>İletişim</a>
        </div>
      )}
    </div>
  );
}

