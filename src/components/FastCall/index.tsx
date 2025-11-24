import type { IContact } from '@/types/type';
import { formatPhone } from '@/utils/phoneUtil';
import { Phone } from 'lucide-react';



interface FastCallProps {
  contactItems: IContact;
}

export default function FastCall({ contactItems }: FastCallProps) {
  return (
    <a
      href={`tel:${formatPhone(contactItems.phone90).tel}`}
      className="
        bg-[#1e3a8a] text-white
        w-14 h-14
        rounded-full
        flex items-center justify-center
        shadow-md
        hover:scale-105 transition-transform
      "
    >
      <Phone size={22} className="text-white" />
    </a>
  );
}

