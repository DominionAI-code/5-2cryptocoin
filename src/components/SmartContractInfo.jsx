"use client";
import { useState } from "react";
import { Copy, Check, Shield, ExternalLink, Wallet } from "lucide-react";

export default function SmartContractInfo() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x6DfDee06d240fda11427Ca0ebb25D76B5C46daaF";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addToMetaMask = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: contractAddress,
              symbol: "FTV",
              decimals: 18,
              image:
                "https://via.placeholder.com/200x200/6366f1/ffffff?text=FTV",
            },
          },
        });
      } else {
        alert("MetaMask is not installed!");
      }
    } catch (error) {
      console.error("Error adding token to MetaMask:", error);
    }
  };

  return (
    <section
      id="contract"
      className="relative py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Smart Contract
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fully audited and verified on Binance Smart Chain. Complete
            transparency and security for your investment.
          </p>
        </div>

        {/* Contract Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contract Address Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Contract Address
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Verified</span>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-slate-600/30">
                <p className="text-cyan-300 font-mono text-sm md:text-base break-all">
                  {contractAddress}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span className="font-medium">
                    {copied ? "Copied!" : "Copy Address"}
                  </span>
                </button>

                <button
                  onClick={addToMetaMask}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  <Wallet className="w-4 h-4" />
                  <span className="font-medium">Add to MetaMask</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contract Details */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contract Details
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-gray-300">Network</span>
                  <span className="text-yellow-400 font-medium">
                    Binance Smart Chain
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-gray-300">Token Standard</span>
                  <span className="text-cyan-400 font-medium">BEP-20</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-gray-300">Total Supply</span>
                  <span className="text-green-400 font-medium">
                    35,000,000,000 FTV
                  </span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Decimals</span>
                  <span className="text-purple-400 font-medium">18</span>
                </div>
              </div>

              <a
                href={`https://bscscan.com/address/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 mt-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-medium">View on BscScan</span>
              </a>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Security Features
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Audited Contract
              </h4>
              <p className="text-gray-300 text-sm">
                Fully audited by leading security firms
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Verified Source
              </h4>
              <p className="text-gray-300 text-sm">
                Source code verified on BscScan
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Wallet Ready
              </h4>
              <p className="text-gray-300 text-sm">
                Compatible with all major wallets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
