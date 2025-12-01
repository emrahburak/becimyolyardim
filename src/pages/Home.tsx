import Hero from "@/components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import ContactUs from "@/components/Contact";
import { bannerData } from "@/data/bannerData";
import { ContactData } from "@/data/contact";
import { footerItems } from "@/data/footerData";
// Gerekli dataları import et...

export default function Home() {
  return (
    <>
      <Hero slideItems={bannerData} contactItems={ContactData} footerItems={footerItems} />
      <AboutUs />
      <Services />
      <ContactUs contactItems={ContactData} />
      {/* Header, Footer vb. BURADA YOK, çünkü Layout'tan gelecek */}
    </>
  );
}
