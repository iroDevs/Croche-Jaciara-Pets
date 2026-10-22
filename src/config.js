// Dados de contato da artesã — edite aqui.
// Formato do WhatsApp: 55 (Brasil) + DDD + número, só dígitos.
export const WHATSAPP = '5532998159957';
export const WHATSAPP_EXIBICAO = '(32) 99815-9957';
export const MARCA = 'Crochê de Pets';

export function linkWhats(mensagem) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}
