"use client";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const tempParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(tempParticles);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(-${mousePosition.x * 0.03}px, -${
              mousePosition.y * 0.03
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${
              mousePosition.y * 0.01
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* Floating Particles — SSR-safe */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-40"
              style={{
                left: particle.left,
                top: particle.top,
                animation: `float ${particle.duration} ease-in-out infinite`,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo/Brand */}
          <div
            className={`mb-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-6 shadow-2xl">
              <span className="text-2xl font-bold text-slate-900">5/2</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-white via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              Welcome to the Future
            </span>
            <br />
            <span className="text-white">of </span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              CryptoCoin
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            A community-driven token with solid use cases and transparent
            tokenomics.
            <br />
            <span className="text-yellow-400 font-semibold">
              Empowering finance with blockchain-backed trust.
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-6 mb-16 transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="#tokenomics"
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-400/25 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View Tokenomics</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#how-to-buy"
              className="group relative px-8 py-4 bg-transparent border-2 border-white/30 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-yellow-400 hover:text-yellow-400 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span className="relative z-10">How to Buy</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </a>
          </div>

          {/* Stats/Features */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                35B
              </div>
              <div className="text-white font-semibold">Total Supply</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                BSC
              </div>
              <div className="text-white font-semibold">
                Binance Smart Chain
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-white font-semibold">Community Driven</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 sm:h-32 text-slate-900/50"
        fill="currentColor"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fillOpacity="1"
          d="M0,64L40,96C80,128,160,192,240,202.7C320,213,400,171,480,154.7C560,139,640,149,720,165.3C800,181,880,203,960,197.3C1040,192,1120,160,1200,144C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </section>
  );
}