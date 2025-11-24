import MechanicalGears from '@/assets/images/webp/hero-10.webp'
import Image1 from '@/assets/images/webp/becim-01.webp'

import type { IContact } from '@/types/type'

import { formatPhone } from "@/utils/phoneUtil";
import { PhoneCall, MailOpen, MapPin, Handshake } from 'lucide-react';
import LocationField from '../LocationField';

interface contactProps {
  contactItems: IContact
}

export default function ContactUs({ contactItems }: contactProps) {

  return (
    <section
      id="contact"
      className="w-full py-16 bg-cover bg-center grid grid-cols-1 lg:grid-cols-2 font-sans relative z-10 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.90), rgba(255,255,255,0.90)), url(${MechanicalGears})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full h-full flex items-center justify-center relative z-0'>

        <div className="border-2 border-regal-red px-4 py-10 rounded-tl-lg space-y-2 max-w-[300px] break-words bg-white shadow-lg">

          <span className="block w-20 h-[2px] bg-red-500 shadow-sm"></span>
          <h2 className='font-semibold '>İletişim</h2>
          <p className='text-xs mb-3'>
            Yolda kaldığınızda zaman kaybetmeyin! Profesyonel ekibimiz günün her saati size sadece bir telefon kadar yakın.
          </p>

          <ul className='space-y-6 text-sm '>
            <li className="flex gap-2 items-start">
              <MapPin className="text-white shrink-0" fill="#ed103b" />
              <span className="whitespace-normal break-words">
                {contactItems.address}
              </span>
            </li>
            <li className="flex gap-2 items-start" >
              <MailOpen className="text-white shrink-0" fill="#ed103b" />
              {contactItems.mail}
            </li>
            <li className="flex gap-2 items-start" >
              <PhoneCall className="text-white shrink-0" fill="#ed103b" />
              <a href={`tel:${formatPhone(contactItems.phone90).tel}`}>
                {formatPhone(contactItems.phone90).display}
              </a>
            </li>
          </ul>
        </div>

        <div
          className="absolute -z-10 w-64 h-64 bg-cover bg-center top-1/2 left-[60%] -translate-y-1/6 shadow-sm hidden md:block"

          style={{
            backgroundImage: `url(${Image1})`,
          }}
        ></div>
      </div>
      <div className="w-full h-full space-y-4 mt-10 lg:mt-0">


        <div className="w-full flex flex-col items-center lg:flex-row lg:items-center lg:justify-start gap-2">
          <Handshake className="text-regal-red" />
          <h2 className="text-regal-red font-semibold font-sans text-center lg:text-left">
            Ulaşım
          </h2>
        </div>
        <div className="w-full flex justify-center p-5">
          <div className="w-full max-w-[520px]">
            <LocationField mapUrl={contactItems.map} />
          </div>
        </div>
      </div>
    </section>

  )
}

