import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/918408811234"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-glow transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
      <MessageCircle className="relative z-10 text-white" />
    </a>
  );
}
