
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ContactData } from "../../data/contact";



export default function WhatsupField() {
  const [waLink, setWaLink] = useState("");

  useEffect(() => {
    const isMobile = /iPhone|Android|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );

    const phone = ContactData.phone90;
    const base = isMobile
      ? `https://wa.me/${phone}`
      : `https://web.whatsapp.com/send?phone=${phone}`;

    setWaLink(base);
  }, []);

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 
        bg-[#25D366] text-white 
        flex items-center justify-center 
        rounded-full shadow-md 
        z-50 
        transition-transform hover:scale-105
        w-14 h-14               /* mobil için büyük ikon butonu */
        sm:w-auto sm:h-auto     /* sm ve üstü cihazlarda klasik buton */
        sm:px-4 sm:py-2
      "
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl sm:text-base" />

      <span className="hidden sm:block font-semibold ml-2">
        WhatsApp
      </span>
    </a>
  );
}

