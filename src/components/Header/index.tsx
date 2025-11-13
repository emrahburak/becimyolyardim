import { ContactData } from "../../data/contact";

import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Send } from 'lucide-react';
import { Instagram, Facebook } from 'lucide-react'

import { formatPhone } from '@/utils/phoneUtil'

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
  const { display, tel } = formatPhone(contactData.phone90)

  return (
    <div>
      <header className="fixed top-0 left-0 w-full  text-white shadow-md z-50 flex flex-row">
        <div className="bg-regal-red p-3 w-1/5">
          <div className="text-2xl font-bold">Becim Yol Yardım</div>
        </div>

        <div className="w-full">
          <div className=" text-white bg-gray-900 flex flex-row items-center justify-around  py-4">
            <div className="flex items-center justify-start gap-3 font-normal text-sm">
              <div className="inline-flex flex-nowrap gap-1 items-center justify-center">
                <Phone className="text-black" fill="#ed103b" />
                <a href={`tel:${tel}`}>{display}</a>
              </div>
              <div className="inline-flex flex-nowrap gap-1 items-center justify-center">
                <Send className="text-black" fill="#ed103b" />
                {contactData.mail}
              </div>

              <div className="inline-flex flex-nowrap gap-1 items-center justify-center">
                <MapPin className="text-black" fill="#ed103b" />
                {contactData.address}
              </div>
            </div>
            <div className="flex items-center justify-start gap-1.5">
              {contactData.social?.map((item, index) => (
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                  {renderSocialIcon(item, "text-black w-5 h-5", "#ffff")}
                </a>
              ))}
            </div>
          </div>
          <nav className="flex items-center  gap-6 bg-white  font-semibold text-regal-black py-3 w-full px-28 ">
            <a href="#hero">Ana Sayfa</a>
            <a href="#about">Hakkımızda</a>
            <a href="#services">Hizmetler</a>
            <a href="#contact">İletişim</a>
          </nav>
        </div>
      </header>
    </div>
  );
};


