import type { FooterLinkGroup } from "../types/type";
import { ContactData } from "./contact";

export const footerItems: FooterLinkGroup[] = [
  {
    title: "Hakkımızda",
    text: "Muğla genelinde 7/24 hızlı ve güvenli yol yardım hizmeti sunuyoruz. Kazalı araç çekimi, aparatlı araç taşıma, akü takviye, lastik değişimi, yakıt desteği ve tekne çekimi hizmetleriyle Milas, Bodrum, Fethiye, Marmaris ve tüm Muğla’da",
  },
  {
    title: "Hizmetler",
    links: [
      { id: 5, name: "7/24 Acil Yol Yardım", link: "#" },
      { id: 7, name: "Oto Kurtarma & Çekici Hizmeti", link: "#" },
      { id: 8, name: "Kaza Sonrası Kurtarma", link: "#" },
      { id: 9, name: "Güvenli Araç Taşıma", link: "#" },
      { id: 10, name: "Güvenli Tekne Taşıma", link: "#" },
      { id: 11, name: "Yerinde Basit Arıza Çözümleri", link: "#" },
      { id: 12, name: "Şehirlerarası Araç Taşıma", link: "#" },
    ],
  },
  {
    title: "İletişim",
    contact: ContactData,
  },

  {
    title: "Çalışma Saatleri",
    text: "Muğla genelinde 7/24 hızlı ve güvenli yol yardım hizmeti",
  },
];
