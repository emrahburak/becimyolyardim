import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhatsupField from "./components/Watsup";
import { footerItems } from "./data/footerData";
import { ContactData } from "./data/contact";

export default function App() {

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <ContactUs contactItems={ContactData} />
      <Footer footerItems={footerItems} />
      <WhatsupField />
    </div>
  );
}

