import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* About Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">About BlueWave Yachts</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          BlueWave offers premier yacht experiences along the stunning coast of Florida. 
          Whether you're planning a sunset cruise, private party, or luxury getaway, 
          our crew ensures an unforgettable journey across the Atlantic waters.
        </p>
      </motion.div>

      {/* Contact Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-3">
          <FaPhoneAlt size={24} className="text-blue-600" />
          <h4 className="font-semibold text-lg">Phone</h4>
          <p className="text-gray-700">+1 641 531 4375</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-3">
          <FaEnvelope size={24} className="text-blue-600" />
          <h4 className="font-semibold text-lg">Email</h4>
          <p className="text-gray-700">info@bluewaveyacht.com</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-3">
          <FaMapMarkerAlt size={24} className="text-blue-600" />
          <h4 className="font-semibold text-lg">Location</h4>
          <p className="text-gray-700">Miami Marina, Florida, USA</p>
        </div>
      </motion.div>

      {/* Google Maps Embed */}
      <motion.div
        className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.735252765144!2d-80.18427834823726!3d25.779306826992133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69fdcd6168d%3A0x9e703d1868f3ea29!2sMiamarina%20At%20Bayside!5e0!3m2!1sar!2str!4v1751235215457!5m2!1sar!2str"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    />

      </motion.div>

      {/* CTA to WhatsApp */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-3">Ready to book your trip?</h3>
        <a
          href="https://wa.me/16415314375?text=Hi! I'd like to book a yacht trip with BlueWave in Florida."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full text-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp /> Book via WhatsApp
        </a>
      </motion.div>
    </div>
  );
}
