
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        <div>

          <div className="text-2xl font-bold">Becim Yol Yardım</div>
        </div>
        <nav className="space-x-6">
          <a href="#hero" className="hover:text-yellow-400 transition-colors">Ana Sayfa</a>
          <a href="#about" className="hover:text-yellow-400 transition-colors">Hakkımızda</a>
          <a href="#services" className="hover:text-yellow-400 transition-colors">Hizmetler</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">İletişim</a>
        </nav>
      </div>
    </header>
  );
};


