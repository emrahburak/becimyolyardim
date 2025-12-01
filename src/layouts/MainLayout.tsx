import { Outlet } from "react-router-dom";
// Component importlarını buraya alıyoruz
import Header from "../components/Header";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";
import FastCall from "../components/FastCall";

import WhatsupField from "@/components/Watsup";
import { footerItems } from "@/data/footerData";
import { ContactData } from "@/data/contact";

export default function MainLayout() {
  return (
    <div className="font-sans min-h-screen flex flex-col w-full max-w-screen overflow-x-hidden">

      {/* 1. Header (Masaüstü) */}
      <div className="hidden lg:block w-full">
        <Header />
      </div>

      {/* 2. Hamburger Menü (Mobil) */}
      <div className="block lg:hidden w-full">
        <HamburgerMenu />
      </div>

      {/* 3. DEĞİŞKEN İÇERİK BURASI (Outlet) */}
      {/* Home veya Privacy sayfası tam buraya render edilecek */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 4. Footer (Her sayfada sabit) */}
      <Footer footerItems={footerItems} />

      {/* 5. Sabit Butonlar (Her sayfada görünsün istiyorsan buraya) */}
      <div className="fixed bottom-20 right-5 z-50 sm:hidden mb-2">
        <FastCall contactItems={ContactData} />
      </div>
      <WhatsupField />

    </div>
  );
}
