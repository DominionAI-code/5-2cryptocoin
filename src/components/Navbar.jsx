"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // ✅ Use Next.js Image for optimization

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Smart Contract", href: "#smart-contract" },
    { label: "How to Buy", href: "#how-to-buy" },
    { label: "Socials", href: "#socials" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-2xl border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4 group cursor-pointer">
            {/* ✅ LOGO IMAGE */}
            <Image
              src="/ftv-logo.jpg"
              alt="FTV Logo"
              width={60}
              height={60}
              className="w-20 h-20"
            />

            {/* Existing Gradient Icon + Text */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl transform rotate-45 group-hover:rotate-[225deg] transition-all duration-700 shadow-lg"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl transform rotate-45 group-hover:rotate-[405deg] transition-all duration-500 opacity-75 blur-sm"></div>
                <div className="absolute inset-2 bg-white rounded-lg transform rotate-45 flex items-center justify-center">
                  <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-lg transform -rotate-45">
                    5/2
                  </span>
                </div>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text">
                  5/2
                </span>
                <span
                  className={`ml-2 transition-colors duration-300 ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  CryptoCoin
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </a>
            ))}

            {/* CTA Button */}
            <div className="ml-4">
              <button className="relative px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Buy 5/2 CryptoCoin Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`relative w-10 h-10 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-white/20 shadow-xl">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300 font-medium"
                onClick={toggleMenu}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                Buy CryptoCoin Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
