import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Body scroll kontrolü
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // menü açıkken scroll yok
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);


  const navLinks = [
    { name: 'Ana Sayfa', id: 'hero' },
    { name: 'Hakkımızda', id: 'about' },
    { name: 'Hizmetler', id: 'services' },
    { name: 'İletişim', id: 'contact' },
    { name: 'Gizlilik Politikası', id: 'gizlilik-politikasi' }, // Yeni bir link ekleyelim
  ];

  // Menüden bir linke tıklandığında menüyü kapatan ve yönlendirmeyi yapan fonksiyon
  const handleLinkClick = (id: string) => {
    setOpen(false);

    if (id === 'gizlilik-politikasi') {
      window.location.href = '/gizlilik'; // Gizlilik sayfasına tam yönlendirme
      return;
    }

    // Diğer linkler için koşullu yönlendirme
    window.location.href = isHomePage ? `#${id}` : `/#${id}`;
  };

  return (
    <div className="fixed top-0 left-0 w-full  bg-regal-navy shadow-md font-sans" style={{ zIndex: "100" }}>
      <div className="flex justify-between items-center p-4">
        <img src="/logo.png" alt="Logo" className="w-16 h-auto rounded-full mb-2" />
        <div className="text-xl font-bold text-white">Beçim Oto Kurtarma</div>
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
        <div className="fixed inset-0 flex flex-col justify-center items-center gap-8 font-semibold text-2xl z-50 text-white bg-regal-navy">
          {/* Sağ üst X */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white text-5xl font-bold"
          >
            &times;
          </button>

          <img src="/logo.png" alt="Logo" className="w-16 h-auto rounded-full mb-2" />
          {navLinks.map((link) => (
            <a
              key={link.id}
              // Burada href yerine onClick kullanıyoruz, çünkü sadece tek sayfa içi kaydırmadan fazlası gerekli.
              onClick={() => handleLinkClick(link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

