import React from "react";
import { motion } from "framer-motion";
import { FaAnchor, FaCrown, FaShip } from "react-icons/fa";

const packages = [
  {
    title: "Daily Escape",
    price: "$900",
    icon: <FaAnchor size={30} />,
    description: [
      "Up to 6 hours",
      "Snacks & soft drinks",
      "Captain & crew included",
    ],
    highlight: false,
  },
  {
    title: "Weekend Getaway",
    price: "$2400",
    icon: <FaShip size={30} />,
    description: [
      "2 Days, 1 Night",
      "2 meals per day",
      "Free snorkeling gear",
    ],
    highlight: true,
  },
  {
    title: "Luxury VIP Cruise",
    price: "$4800",
    icon: <FaCrown size={30} />,
    description: [
      "3 Days, 2 Nights",
      "All-inclusive luxury service",
      "Private chef & champagne",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <div className="max-w-6xl mx-auto p-6 flex-grow">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 pt-8 text-blue-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pricing & Packages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              className={`border rounded-2xl p-8 shadow-lg flex flex-col justify-between transition-transform duration-300 hover:shadow-2xl ${
                pkg.highlight
                  ? "bg-blue-100 border-blue-700 scale-105"
                  : "bg-white border-gray-300"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center space-x-4 mb-6 text-blue-700">
                {pkg.icon}
                <h3 className="text-2xl font-semibold">{pkg.title}</h3>
              </div>

              <div className="text-4xl font-extrabold mb-6 text-blue-900">
                {pkg.price}
              </div>

              <ul className="mb-8 space-y-3 text-gray-700 list-disc list-inside">
                {pkg.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>

              <a
                href={`https://wa.me/16415314375?text=Hi! I'm interested in the ${pkg.title} yacht package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold text-center px-6 py-4 rounded-xl shadow-md transition"
              >
                Book via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
