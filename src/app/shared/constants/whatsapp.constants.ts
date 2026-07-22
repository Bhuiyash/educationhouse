export const WHATSAPP_NUMBER = '9695689720';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
