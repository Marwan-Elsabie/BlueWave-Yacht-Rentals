import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import FloatingSocialBar from "./components/FloatingSocialBar";
import Pricing from "./pages/Pricing";

export default function YachtRentalApp() {
  return (
    <>
      <Router>
        <header className="bg-white shadow-md py-6 px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">BlueWave Yacht Rentals</h1>
          <nav className="space-x-6">
            <Link to="/" className="text-blue-700 hover:underline">Home</Link>
            <Link to="/gallery" className="text-blue-700 hover:underline">Gallery</Link>
            <Link to="/pricing" className="text-blue-700 hover:underline">Pricing</Link>
            <Link to="/contact" className="text-blue-700 hover:underline">Contact</Link>
          </nav>
        </header>

        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-blue-700 text-white text-center py-6 mt-10">
          &copy; {new Date().getFullYear()} BlueWave Yacht Rentals. All rights reserved.
        </footer>
      </Router>
      {/* Floating Social Icons */}
      <FloatingSocialBar />
    </>
  );
}
