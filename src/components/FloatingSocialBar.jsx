import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function FloatingSocialBar() {
  const contacts = [
    {
      icon: <FaWhatsapp size={20} />,
      url: "https://wa.me/16415314375?text=Hello!%20I'm%20interested%20in%20renting%20your%20yacht",
      label: "WhatsApp",
      bg: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: <FaInstagram size={20} />,
      url: "https://instagram.com/marwa_alsabaa",
      label: "Instagram",
      bg: "bg-gradient-to-tr from-pink-500 to-yellow-400 hover:opacity-90",
    },
    {
      icon: <FaFacebookF size={20} />,
      url: "https://facebook.com/marwa.alsabaa",
      label: "Facebook",
      bg: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <FaTiktok size={20} />,
      url: "https://tiktok.com/@your_username",
      label: "TikTok",
      bg: "bg-black hover:bg-gray-800",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">
      {contacts.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 flex items-center justify-center rounded-full text-white shadow-xl transition duration-300 ${item.bg}`}
          aria-label={item.label}
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
