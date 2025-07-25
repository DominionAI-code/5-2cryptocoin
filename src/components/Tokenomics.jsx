"use client";
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function Tokenomics() {
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const tokenData = [
    {
      title: "Liquidity Pool",
      percentage: 25,
      color: "#3B82F6",
      description: "Ensuring smooth trading and price stability",
      icon: "💧",
    },
    {
      title: "Precious Metals",
      percentage: 25,
      color: "#F59E0B",
      description: "Backed by real-world precious metal reserves",
      icon: "🥇",
    },
    {
      title: "Founders",
      percentage: 16,
      color: "#10B981",
      description: "Team allocation with vesting schedule",
      icon: "👥",
    },
    {
      title: "Marketing",
      percentage: 10,
      color: "#EC4899",
      description: "Community growth and strategic partnerships",
      icon: "📢",
    },
    {
      title: "Reserve",
      percentage: 24,
      color: "#8B5CF6",
      description: "Future development and ecosystem expansion",
      icon: "🏦",
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-xl border border-gray-200">
          <p className="font-bold text-gray-800">{data.title}</p>
          <p className="text-2xl font-bold" style={{ color: data.color }}>
            {data.percentage}%
          </p>
          <p className="text-sm text-gray-600 mt-2">{data.description}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id="tokenomics"
      className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transparent allocation of 35 billion 5/2 Cryptocoin tokens designed for
            sustainable growth and community value
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Pie Chart */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Token Distribution
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={tokenData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={160}
                    paddingAngle={2}
                    dataKey="percentage"
                    onMouseEnter={(_, index) => setHoveredSegment(index)}
                    onMouseLeave={() => setHoveredSegment(null)}
                  >
                    {tokenData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke={hoveredSegment === index ? "#fff" : "none"}
                        strokeWidth={hoveredSegment === index ? 3 : 0}
                        style={{
                          filter:
                            hoveredSegment === index
                              ? "brightness(1.2)"
                              : "brightness(1)",
                          transition: "all 0.3s ease",
                        }}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>

              {/* Center Info */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">35B</div>
                  <div className="text-lg text-gray-300">Total Supply</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Token Cards */}
          <div className="space-y-4">
            {tokenData.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  hoveredSegment === index ? "scale-105 shadow-2xl" : ""
                }`}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
              >
                {/* Gradient Background */}
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                  }}
                ></div>

                {/* Glass Effect */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                {/* Border */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 opacity-60"
                  style={{ borderColor: item.color }}
                ></div>

                {/* Content */}
                <div className="relative p-6 flex items-center space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span
                          className="text-3xl font-bold"
                          style={{ color: item.color }}
                        >
                          {item.percentage}%
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.color}50, transparent)`,
                      transform: "translateX(-100%)",
                      animation:
                        hoveredSegment === index
                          ? "shimmer 2s infinite"
                          : "none",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <h4 className="text-lg font-bold text-white mb-2">
              Locked Liquidity
            </h4>
            <p className="text-gray-300 text-sm">
              25% permanently locked for stability
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl mb-2">⏰</div>
            <h4 className="text-lg font-bold text-white mb-2">
              Vesting Schedule
            </h4>
            <p className="text-gray-300 text-sm">
              Founder tokens vested over 24 months
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="text-lg font-bold text-white mb-2">Fair Launch</h4>
            <p className="text-gray-300 text-sm">
              No presale, transparent distribution
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
