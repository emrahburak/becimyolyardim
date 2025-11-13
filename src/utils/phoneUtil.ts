export function formatPhone(phone?: number | string): {
  display: string;
  tel: string;
} {
  if (!phone) {
    return { display: "", tel: "" };
  }

  // string'e çevir
  const phoneStr = String(phone).replace(/\D/g, "");

  // +90'ı ekle
  const tel = `+${phoneStr.startsWith("90") ? phoneStr : "90" + phoneStr}`;

  // Görünen format: +90 (555) 123 45 67
  const match = phoneStr.match(/^90?(\d{3})(\d{3})(\d{2})(\d{2})$/);
  const display = match
    ? `+90 (${match[1]}) ${match[2]} ${match[3]} ${match[4]}`
    : `+${phoneStr}`;

  return { display, tel };
}
