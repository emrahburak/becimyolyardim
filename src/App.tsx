import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhatsupField from "./components/Watsup";
import { footerItems } from "./data/footerData";
import { ContactData } from "./data/contact";
import HamburgerMenu from "./components/HamburgerMenu";
import { bannerData } from "./data/bannerData";
import FastCall from "./components/FastCall";


export default function App() {

  return (
    <div className="font-sans min-h-screen flex flex-col w-full max-w-screen overflow-x-hidden">
      {/* Desktop Header */}
      <div className="hidden lg:block w-full">
        <Header />
      </div>
      {/* Mobile / Tablet Hamburger Menu */}
      <div className="block lg:hidden w-full">
        <HamburgerMenu />
      </div>
      <Hero slideItems={bannerData} contactItems={ContactData} footerItems={footerItems} />
      <AboutUs />
      <Services />
      <ContactUs contactItems={ContactData} />
      <Footer footerItems={footerItems} />
      {/* Acil Arama Butonu */}
      <div className="fixed bottom-20 right-5 z-50 sm:hidden mb-2">
        <FastCall contactItems={ContactData} />
      </div>
      <WhatsupField />

      <WhatsupField />
    </div>
  );
}

