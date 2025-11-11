import type { FooterLinkGroup } from "../../types/type"

interface FooterProps {
  footerItems: FooterLinkGroup[]
}


export default function Footer({ footerItems }: FooterProps) {
  return (
    <div className="bg-regal-navy text-white w-full">
      <ul className="grid grid-flow-col gap-3 w-3/4 mx-auto">
        {footerItems?.map((item, index) => (
          <li key={index}>
            <h4 className="font-semibold mb-2">{item.title}</h4>

            {item.text ? (
              <p>{item.text}</p>
            ) : item.links ? (
              item.links.map((link) => (
                <a
                  href={link.link}
                  key={link.id}
                  className="block hover:underline"
                >
                  {link.name}
                </a>
              ))
            ) : item.contact ? (
              <div className="flex flex-col gap-1 text-sm">
                <p>{item.contact.phone90}</p>
                <p>{item.contact.mail}</p>
                <p>{item.contact.address}</p>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

