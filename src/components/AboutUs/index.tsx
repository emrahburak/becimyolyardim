import Image1 from '@/assets/images/webp/becim-01.webp'
import Image2 from '@/assets/images/webp/becim-05.webp'
import Image3 from '@/assets/images/webp/becim-02.webp'
import MechanicalGears from '@/assets/images/webp/hero-10.webp'
import { AboutData } from '../../data/aboutData'
import { Gem, BadgeCheck, Phone } from 'lucide-react';

import { formatPhone } from '@/utils/phoneUtil'




export default function AboutUs() {
  const aboutData = AboutData;

  const { display, tel } = formatPhone(aboutData.contact?.phone90)

  return (
    <section id='about'
      className="w-full py-24 flex flex-col lg:flex-row items-center justify-between gap-12 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.90), rgba(255,255,255,0.90)), url(${MechanicalGears})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Sol taraf: görseller */}
      <div className="relative flex-1 flex justify-center items-center px-6 lg:px-12">
        {/* Dikey dizilim (1 ve 3. görseller) */}
        <div className="flex flex-col gap-3">
          <div
            className="w-64 h-64 bg-cover bg-center  shadow-md"
            style={{ backgroundImage: `url(${Image1})` }}
          ></div>
          <div
            className="w-64 h-64 bg-cover bg-center  shadow-md"
            style={{ backgroundImage: `url(${Image3})` }}
          ></div>
        </div>

        {/* Ortadaki bindirilen (2. görsel) */}
        <div
          className="hidden lg:block absolute z-10 w-64 h-64 bg-cover bg-center shadow-lg top-1/2 -translate-y-1/2"

          style={{
            backgroundImage: `url(${Image2})`,
            left: '60%',
            position: 'absolute',
          }}
        >
          {/* Kalın beyaz kenarlık efekti */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderLeft: '6px solid white',
              borderTop: '6px solid white',
              borderBottom: '6px solid white',
              boxSizing: 'border-box',
            }}>
          </div>
        </div>
      </div>

      {/* Sağ taraf: metin */}
      <div className="flex-1 space-y-6 px-6 lg:px-12 z-10">
        <div className='inline-flex items-center gap-2' >
          <Gem className='text-regal-red' />
          <h2 className="text-regal-red font-semibold font-sans">Hakkımızda</h2>
        </div>
        <h1 className='font-bold font-sans text-4xl text-gray-700 whitespace-pre-line'>{aboutData.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          {aboutData.description}
        </p>
        <ul className='font-semibold grid grid-cols-1 gap-2'>
          {aboutData.attributes.map((attributeItem) => (
            <li key={attributeItem} className='inline-flex items-center gap-3'>
              <BadgeCheck className="text-regal-red" size={12} />
              {attributeItem}
            </li>
          ))}
        </ul>
        <div className='inline-flex items-center gap-2'>
          <span className='bg-red-200 rounded-full p-2  shadow-sm cursor-pointer'>
            <Phone className='text-regal-red' fill="#ed103b" />
          </span>

          <a href={`tel:${tel}`}>{display}</a>

        </div>
      </div>
    </section>
  )
}

