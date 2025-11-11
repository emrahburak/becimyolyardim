import { ContactData } from "../../data/contact";

import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Send } from 'lucide-react';
import { Instagram, Facebook } from 'lucide-react'

type SocialItem = {
  href?: string
  title?: string
}

export function renderSocialIcon(
  item: SocialItem,
  className: string,
  fill: string
) {
  if (!item?.href) return null

  switch (item.title?.toLowerCase()) {
    case 'instagram':
      return <Instagram className={className} fill={fill} />
    case 'facebook':
      return <Facebook className={className} fill={fill} />
    default:
      return null
  }
}



export default function Header() {
  const contactData = ContactData

  return (
    <header className="w-full flex">
      {/* Sol logo alanı */}
      <div className="bg-regal-red p-3 w-1/5 flex items-center justify-center">
        <div className="text-2xl font-bold">Becim Yol Yardım</div>
      </div>

      {/* Sağ taraf */}
      <div className="flex flex-col w-4/5">
        {/* Üst bilgi satırı */}
        <div className="bg-gray-900 text-white flex items-center justify-between py-4 px-10">
          <div className="flex items-center gap-3 font-normal text-sm">
            <div className="flex items-center gap-1">
              <Phone className="text-black" fill="#ed103b" />
              {contactData.phone90}
            </div>
            <div className="flex items-center gap-1">
              <Send className="text-black" fill="#ed103b" />
              {contactData.mail}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="text-black" fill="#ed103b" />
              {contactData.address}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {contactData.social?.map((item, index) => (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                {renderSocialIcon(item, "text-black w-5 h-5", "#ffff")}
              </a>
            ))}
          </div>
        </div>

        {/* Navigasyon satırı */}
        <nav className="bg-white text-regal-black font-semibold py-3 px-10 flex items-center gap-6 w-full ">
          <a href="#hero">Ana Sayfa</a>
          <a href="#about">Hakkımızda</a>
          <a href="#services">Hizmetler</a>
          <a href="#contact">İletişim</a>
        </nav>
      </div>
    </header>
  );
};


