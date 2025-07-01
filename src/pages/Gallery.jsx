import React, { useState } from "react";
import { motion } from "framer-motion";
import Yacht3DViewer from "../components/Yacht3DViewer";
import { FaMousePointer, FaSearchPlus } from "react-icons/fa";

const images = [
  "models/yacht-interior.webp",
  "models/cabin-interior.jpeg",
  "models/boat-luxury.webp",
  "models/yacht-interior.webp",
  "models/cabin-interior.jpeg",
  "models/boat-luxury.webp",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeTab, setActiveTab] = useState("outside");

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Yacht Gallery
      </motion.h2>

      {/* Enhanced Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex border-b border-gray-200 gap-8">
          <button
            onClick={() => setActiveTab("outside")}
            className="relative px-4 py-2 font-medium text-lg focus:outline-none"
          >
            Outside View
            {activeTab === "outside" && (
              <motion.div
                layoutId="tabIndicator"
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("inside")}
            className="relative px-4 py-2 font-medium text-lg focus:outline-none"
          >
            Interior Gallery
            {activeTab === "inside" && (
              <motion.div
                layoutId="tabIndicator"
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Tab Content with Smooth Transitions */}
      <div className="relative min-h-[600px]">
        {activeTab === "outside" ? (
          <motion.div
            key="outside"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={activeTab !== "outside" ? "hidden" : ""}
          >
            <Yacht3DViewer />
          </motion.div>
        ) : (
          <motion.div
            key="inside"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer overflow-hidden rounded-lg shadow-md"
                onClick={() => setSelectedImg(src)}
              >
                <img
                  src={src}
                  loading="lazy"
                  alt={`Yacht interior ${index + 1}`}
                  className="w-full h-60 object-cover transition duration-300 hover:opacity-90"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImg && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImg(null)}
        >
          <motion.div
            className="relative max-w-6xl w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <motion.img
              src={selectedImg}
              alt="Enlarged yacht interior"
              className="max-w-full max-h-[80vh] rounded-lg mx-auto object-contain"
            />
            <button
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}