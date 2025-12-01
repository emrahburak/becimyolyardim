
import { ContactData } from "../../data/contact";
import { formatPhone } from "@/utils/phoneUtil";

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";



import { renderSocialIcon } from "../RenderSocial";
import { useLocation } from "react-router-dom";




export default function Header() {
  const contactData = ContactData
  const { display, tel } = formatPhone(contactData.phone90)

  // Adım 1: Mevcut konumu al
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  // Eğer birden fazla dil veya farklı ana sayfa yolları varsa
  // isHomePage = location.pathname === '/' || location.pathname === '/home' gibi genişletebilirsin.

  // Linklerin listesini tanımlayabiliriz. Bu, kodu daha temiz yapar.
  const navLinks = [
    { name: 'Ana Sayfa', id: 'hero' },
    { name: 'Hakkımızda', id: 'about' },
    { name: 'Hizmetler', id: 'services' },
    { name: 'İletişim', id: 'contact' },
  ];


  return (
    <header className="fixed top-0 left-0 bottom-0 w-full h-28  text-white shadow-md z-50 flex flex-row font-sans">
      <div className="w-1/3 h-full flex flex-col relative">

        {/* Üst */}
        <div className="w-full h-1/2 relative bg-gray-900">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 68% 0, 100% 100%, 0% 100%)",
              backgroundColor: "#ed103b",
            }}
          ></div>
        </div>

        {/* Alt */}
        <div className="w-full h-1/2 relative bg-white">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 68% 100%, 0% 100%)",
              backgroundColor: "#ed103b",
            }}
          ></div>
        </div>

        {/* MERKEZDE LOGO + YAZI */}
        <div className="absolute inset-0 flex flex-nowrap gap-1 items-center   z-10 pointer-events-none">
          <img src="/logo.png" alt="Logo" className="w-16 h-auto rounded-full mb-2 ml-10" />
          <div className="px-2">
            <p className="text-white font-extrabold text-xl md:text-base">Beçim</p>
            <p className="font-semibold text-lg md:text-base">Oto Kurtarma</p>
          </div>
        </div>

      </div>
      <div className="w-full  bg-white">
        <div className=" text-white bg-gray-900 flex flex-row items-center justify-between  py-4.5 px-10">
          <div className="flex items-center justify-start gap-3 font-normal text-sm">
            <div className="inline-flex flex-nowrap gap-1 items-center justify-center">
              <FaPhone className="text-black" fill="#ed103b" />
              <a href={`tel:${tel}`}>{display}</a>
            </div>

            <div className="inline-flex flex-nowrap gap-1 items-center justify-center">
              <IoIosSend className="text-black" fill="#ed103b" />
              {contactData.mail}
            </div>

            <div className="inline-flex flex-nowrap gap-1 items-center justify-center">
              <FaMapMarkerAlt className="text-black" fill="#ed103b" />
              {contactData.address}
            </div>
          </div>
          <div className="flex items-center justify-end gap-1.5  ">
            {contactData.social?.map((item, index) => (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                {renderSocialIcon(item, "text-black w-5 h-5", "#ffff")}
              </a>
            ))}
          </div>
        </div>
        <nav className="flex items-center gap-6 bg-white font-semibold text-regal-black py-3 w-full px-28 h-fit">
          {navLinks.map((link) => (
            <a
              key={link.id}
              // Adım 2: Koşullu Link Oluşturma
              href={isHomePage ? `#${link.id}` : `/#${link.id}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>


  );
};


