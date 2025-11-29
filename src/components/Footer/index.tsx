import type { FooterLinkGroup } from "../../types/type"
import { MoveRight } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Send } from 'lucide-react';
import { renderSocialIcon } from "../RenderSocial";
import { formatPhone } from "@/utils/phoneUtil";



interface FooterProps {
  footerItems: FooterLinkGroup[]
}


export default function Footer({ footerItems }: FooterProps) {



  return (
    <div className="bg-regal-navy text-white w-full font-sans py-8 mt-auto">
      <div className="h-full flex items-center  w-full justify-center">
        <img src="/logo.png" alt="Logo" className="w-16 h-auto rounded-full mb-4 " />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-3/4 mx-auto">


        {footerItems?.map((item, index) => (
          <li key={index} className="space-y-2.5 px-8">
            <h3 className="font-bold">{item.title}</h3>

            <div className="flex items-center gap-1 group">
              <span className="block w-16 h-[2px] bg-red-500"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-1 h-[2px] bg-white"></span>
            </div>
            {item.text ? (
              <p className="text-xs text-justify">{item.text}</p>
            ) : item.links ? (
              <ul className="flex flex-col gap-1">
                {
                  item.links.map((link) => (
                    <li className="inline-flex items-center gap-2.5 justify-start">
                      <MoveRight size={12} />
                      <a
                        href={link.link}
                        key={link.id}
                        className="block hover:underline text-xs">
                        {link.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            ) : item.contact ? (
              <div className="space-y-2.5 text-xs">
                <a className="inline-flex items-start gap-2.5 justify-start">
                  <span className="bg-white/30 backdrop-blur-sm p-1 rounded-sm">
                    <MapPin className="text-regal-navy" fill="#ffff" size={16} strokeWidth={1} />
                  </span>
                  {item.contact.address}
                </a>
                <a className="inline-flex items-start gap-2.5 justify-start">
                  <span className="bg-white/30 backdrop-blur-sm p-1 rounded-sm">
                    <Send className="text-regal-navy" fill="#ffff" size={14} />
                  </span>
                  {item.contact.mail}
                </a>
                <a href={`tel:${formatPhone(item.contact.phone90).tel}`}
                  className="inline-flex items-start gap-2.5 justify-start">
                  <span className="bg-white/30 backdrop-blur-sm p-1 rounded-sm">
                    <Phone className="text-regal-navy" fill="#ffff" size={14} />
                  </span>
                  {formatPhone(item.contact.phone90).display}
                </a>
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="flex w-3/4 mx-auto px-8 gap-2.5 mt-3">
        {footerItems.map((item) => (
          item.contact?.social?.map((socialItem, ids) => (
            <a key={ids} href={socialItem.href} target="_blank" rel="noopener noreferrer" className="bg-white/30 backdrop-blur-sm p-1 rounded-sm">
              {renderSocialIcon(socialItem, "text-regal-navy w-5 h-5", "#ffff")}
            </a>
          ))
        ))}
      </div>


    </div>
  );
}

