const WHATSAPP_NUMBER = "905060009499";
const WHATSAPP_MESSAGE = "Merhaba, Akademik Merkez hizmetleri hakkında bilgi almak istiyorum.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="WhatsApp üzerinden bize yazın"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.2.6 4.27 1.63 6.05L4 29l8.2-1.58a12.9 12.9 0 0 0 3.82.58h.01c6.62 0 12.02-5.37 12.02-11.98C28.05 8.37 22.65 3 16.02 3Zm0 21.9h-.01a10.05 10.05 0 0 1-5.11-1.4l-.37-.22-4.87.94.98-4.75-.24-.39a9.9 9.9 0 0 1-1.53-5.3c0-5.5 4.5-9.98 10.16-9.98 2.71 0 5.26 1.06 7.18 2.98a10.06 10.06 0 0 1 2.97 7.15c0 5.5-4.51 9.97-10.16 9.97Zm5.57-7.47c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.44.25-.7.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}
