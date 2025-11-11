import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatsupField from "./components/Watsup";
import { footerItems } from "./data/footerData";

export default function App() {

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Footer footerItems={footerItems} />
      <div className="mt-6">
        <WhatsupField />
      </div>
    </div>
  );
}

