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

export default function App() {

  return (
    <div className="font-sans min-h-screen flex flex-col w-full">
      {/* Desktop Header */}
      <div className="hidden lg:block w-full">
        <Header />
      </div>
      {/* Mobile / Tablet Hamburger Menu */}
      <div className="block lg:hidden w-full">
        <HamburgerMenu />
      </div>
      <Hero />
      <AboutUs />
      <Services />
      <ContactUs contactItems={ContactData} />
      <Footer footerItems={footerItems} />
      <WhatsupField />
    </div>
  );
}

