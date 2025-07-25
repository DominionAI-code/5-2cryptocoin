// "use client";

// import { useState, useEffect } from "react";
// import { Sparkles, Shield, TrendingUp, Coins, ArrowRight } from "lucide-react";

// export default function AboutSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [particles, setParticles] = useState([]);

//   // Intersection Observer for fade-in effects
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const element = document.getElementById("about");
//     if (element) {
//       observer.observe(element);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Generate random particles only once on mount
//   useEffect(() => {
//     const tempParticles = [...Array(20)].map(() => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       animationDelay: `${Math.random() * 3}s`,
//       animationDuration: `${2 + Math.random() * 2}s`,
//     }));
//     setParticles(tempParticles);
//   }, []);

//   const features = [
//     {
//       icon: Shield,
//       title: "Transparent Security",
//       description:
//         "Built on proven blockchain technology with full audit transparency",
//     },
//     {
//       icon: TrendingUp,
//       title: "Strategic Growth",
//       description:
//         "Designed for long-term value appreciation and sustainable returns",
//     },
//     {
//       icon: Coins,
//       title: "Asset-Backed Value",
//       description:
//         "Precious metals allocation provides real-world asset backing",
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-6 md:px-16 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       {/* Floating Particles - fixed for hydration */}
//       <div className="absolute inset-0 overflow-hidden">
//         {particles.map((particle, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
//             style={{
//               left: particle.left,
//               top: particle.top,
//               animationDelay: particle.animationDelay,
//               animationDuration: particle.animationDuration,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div
//           className={`text-center mb-20 transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 mb-8">
//             <Sparkles className="w-5 h-5 text-purple-300" />
//             <span className="text-purple-300 font-medium">
//               Introducing 5/2 CryptoCoin
//             </span>
//           </div>

//           <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
//             What is 5/2 CryptoCoin?
//           </h2>

//           <div className="max-w-4xl mx-auto space-y-6">
//             <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
//               5/2 CryptoCoin is a{" "}
//               <span className="text-purple-300 font-semibold">
//                 blockchain-powered digital asset
//               </span>{" "}
//               designed to revolutionize wealth distribution and investment. With
//               strategic allocation to liquidity, metals, founders, and
//               marketing, 5/2 CryptoCoin aims to provide{" "}
//               <span className="text-cyan-300 font-semibold">
//                 stability, utility, and long-term growth
//               </span>
//               .
//             </p>

//             <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
//               Our mission is to bridge the world of traditional value (such as
//               precious metals) with decentralized finance, creating an ecosystem
//               where{" "}
//               <span className="text-white font-semibold">
//                 transparency meets opportunity
//               </span>
//               .
//             </p>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div
//           className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               <div className="relative z-10">
//                 <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <feature.icon className="w-8 h-8 text-white" />
//                 </div>

//                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
//                   {feature.title}
//                 </h3>

//                 <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div
//           className={`text-center transition-all duration-1000 delay-600 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer group">
//             <span className="text-lg">Explore Our Tokenomics</span>
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//           </div>

//           <p className="mt-6 text-gray-400 text-sm">
//             Discover how 5/2 CryptoCoin creates value through strategic asset
//             allocation
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import { Sparkles, Shield, TrendingUp, Coins, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tempParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    }));
    setParticles(tempParticles);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Transparent Security",
      description:
        "Built on proven blockchain technology with full audit transparency",
    },
    {
      icon: TrendingUp,
      title: "Strategic Growth",
      description:
        "Designed for long-term value appreciation and sustainable returns",
    },
    {
      icon: Coins,
      title: "Asset-Backed Value",
      description:
        "Precious metals allocation provides real-world asset backing",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles - only render if particles exist */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-purple-300" />
            <span className="text-purple-300 font-medium">
              Introducing 5/2 CryptoCoin
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            What is 5/2 CryptoCoin?
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              5/2 CryptoCoin is a{" "}
              <span className="text-purple-300 font-semibold">
                blockchain-powered digital asset
              </span>{" "}
              designed to revolutionize wealth distribution and investment. With
              strategic allocation to liquidity, metals, founders, and
              marketing, 5/2 CryptoCoin aims to provide{" "}
              <span className="text-cyan-300 font-semibold">
                stability, utility, and long-term growth
              </span>
              .
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Our mission is to bridge the world of traditional value (such as
              precious metals) with decentralized finance, creating an ecosystem
              where{" "}
              <span className="text-white font-semibold">
                transparency meets opportunity
              </span>
              .
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer group">
            <span className="text-lg">Explore Our Tokenomics</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            Discover how 5/2 CryptoCoin creates value through strategic asset
            allocation
          </p>
        </div>
      </div>
    </section>
  );
}
