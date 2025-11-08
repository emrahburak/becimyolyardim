export type socialLinks = {
  id: number;
  title: string;
  href: string;
};

interface IContact {
  phone: string;
  phone90: number;
  mail: string;
  address?: string;
  social?: socialLinks[];
  map: string;
}

export const ContactData: IContact = {
  phone90: 905319326423,
  phone: "05319326423",
  mail: "info@becilyolyardim.com.tr",
  address:
    "Aydınlıkevler mahallesi Kocatepe caddesi yeşilvadi sitesi. Milas/Muğla",
  social: [
    { id: 1, href: "", title: "facebook" },
    { id: 2, href: "", title: "x" },
    {
      id: 3,
      href: "",
      title: "instagram",
    },
  ],
  map: "",
};
