export type socialLinks = {
  id: number;
  title: string;
  href: string;
};

export interface IContact {
  phone: string;
  phone90: number;
  mail: string;
  address?: string;
  social?: socialLinks[];
  map: string;
}

export interface FooterLink {
  id: number;
  name: string;
  link: string;
  slug?: string;
}

export interface FooterLinkGroup {
  title: string;
  links?: FooterLink[];
  text?: string;
  contact?: IContact;
}
