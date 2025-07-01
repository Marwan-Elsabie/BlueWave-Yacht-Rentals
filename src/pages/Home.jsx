import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import heroImg from "../assets/hero-yacht.jpg"; // Replace with your actual image

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div
          className="relative text-center text-white px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Luxury Yacht Rentals in Florida
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
            Cruise the Miami coast in style. Sunset tours, private parties, and unforgettable memories await.
          </p>
          <a
            href="https://wa.me/16415314375?text=Hi! I'd like to book a yacht trip with BlueWave in Florida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full text-lg"
          >
            <FaWhatsapp /> Book Now on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Features Section */}
     <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
            <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            Why Sail With BlueWave Yachts?
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
                {
                icon: "🛥️",
                title: "Premium Yacht Fleet",
                desc: "Hand-selected luxury yachts with modern amenities and meticulous maintenance.",
                },
                {
                icon: "🥂",
                title: "Tailored Experiences",
                desc: "Every cruise is fully customizable — from sunset dinners to overnight parties.",
                },
                {
                icon: "🎵",
                title: "Onboard Entertainment",
                desc: "Bluetooth sound, LED lighting, Wi-Fi, champagne service, and more.",
                },
                {
                icon: "👨‍✈️",
                title: "Professional Crew",
                desc: "Experienced captains and hosts ensure your safety, comfort, and enjoyment.",
                },
                {
                icon: "📍",
                title: "Top Miami Location",
                desc: "Depart directly from Miami Marina — minutes away from top coastal destinations.",
                },
                {
                icon: "📸",
                title: "Memories Captured",
                desc: "Ask about our drone footage and professional photography add-ons.",
                },
            ].map((feature, i) => (
                <motion.div
                key={i}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
            ))}
            </div>
        </div>
       </section>


      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Your dream yacht cruise is one message away.
          </h2>
          <p className="text-lg mb-6">
            Contact us on WhatsApp to reserve your unforgettable experience.
          </p>
          <a
            href="https://wa.me/16415314375?text=Hi! I'm ready to cruise with BlueWave Yachts!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Chat with Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}
