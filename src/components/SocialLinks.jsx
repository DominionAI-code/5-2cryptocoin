"use client";

import { useState, useEffect } from "react";
import {
  MessageCircle,
  Twitter,
  Globe,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function SocialLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [particles, setParticles] = useState([]);

  // ✅ Fix: generate random positions only on client side
  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
    }));
    setParticles(generatedParticles);
  }, []);

  const socialLinks = [
    {
      icon: MessageCircle,
      label: "Telegram",
      href: "https://t.me/ftvtoken",
      color: "from-blue-400 to-blue-600",
      hoverColor: "from-blue-500 to-blue-700",
      description: "Join 10K+ members",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/ftvtoken",
      color: "from-sky-400 to-sky-600",
      hoverColor: "from-sky-500 to-sky-700",
      description: "Latest updates",
    },
    {
      icon: Globe,
      label: "Website",
      href: "https://ftvtoken.io",
      color: "from-indigo-400 to-indigo-600",
      hoverColor: "from-indigo-500 to-indigo-700",
      description: "Learn more",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-600/20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* ✅ Fixed: Floating Particles now client-only */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">
              Connect With Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Join Our Growing Community
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Be part of the 5/2 Cryptocoin revolution. Connect with thousands of investors,
            get exclusive updates, and shape the future of tokenized value.
          </p>

          <div className="flex items-center justify-center gap-2 text-blue-300">
            <Users className="w-5 h-5" />
            <span className="text-lg font-semibold">
              15,000+ Active Members
            </span>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                >
                  <div className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${
                        hoveredIndex === index
                          ? social.hoverColor
                          : social.color
                      } mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {social.label}
                    </h3>

                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                      {social.description}
                    </p>

                    <div className="flex items-center justify-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Join Now</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">
                Community is Live
              </span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <span className="text-white/90">Join the conversation today!</span>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </section>
  );
}