import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919961057130"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:bottom-6 bottom-8 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};
