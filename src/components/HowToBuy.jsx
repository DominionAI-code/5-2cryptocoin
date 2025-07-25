"use client";
import { useState } from "react";
import {
  Copy,
  Check,
  Wallet,
  DollarSign,
  ArrowRight,
  Coins,
  Shield,
  Zap,
} from "lucide-react";

export default function HowToBuy() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x6DfDee06d240fda11427Ca0ebb25D76B5C46daaF";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Install Your Wallet",
      description: "Download MetaMask or Trust Wallet",
      detail: "Get your secure crypto wallet ready for trading",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Fund with BNB",
      description: "Add BNB to your wallet",
      detail: "You'll need BNB to swap for FTV tokens",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Visit PancakeSwap",
      description: "Go to your preferred DEX",
      detail: "Connect your wallet to start trading",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Add Contract Address",
      description: "Paste FTV contract address",
      detail: "Verify you're buying the authentic FTV token",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Swap & Confirm",
      description: "Exchange BNB for FTV",
      detail: "Review transaction and confirm the swap",
    },
  ];

  return (
    <section id="how-to-buy" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,rgb(36,0,255,0.2)_0deg,rgb(0,135,255,0.2)_67.5deg,rgb(108,39,157,0.2)_198.75deg,rgb(24,38,163,0.2)_251.25deg,rgb(54,103,196,0.2)_301.88deg,rgb(105,30,255,0.2)_360deg)] opacity-70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-16 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full mb-6">
            <Wallet className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
            How to Buy 5/2 CryptoCoin
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get started with 5/2 CryptoCoin in just a few simple steps. Join thousands of
            investors in the future of tokenized value.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 z-10"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="text-blue-400 mb-4 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-200 text-sm mb-3">{step.description}</p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contract Address Card */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              5/2 CryptoCoin Contract Address
            </h3>
            <p className="text-gray-300">
              Always verify you're buying the authentic FTV token
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-black/30 rounded-xl p-4 border border-gray-600/30 flex-1 max-w-md">
              <code className="text-blue-400 font-mono text-sm break-all">
                {contractAddress}
              </code>
            </div>

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy Address
                </>
              )}
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 flex items-center gap-3">
            <span>Buy 5/2 CryptoCoin Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-blue-400/50 flex items-center gap-3">
            <Wallet className="w-5 h-5" />
            <span>Add to MetaMask</span>
          </button>
        </div>

        {/* Security Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm">
            <Shield className="w-4 h-4" />
            <span>Always verify contract addresses before trading</span>
          </div>
        </div>
      </div>
    </section>
  );
}
