"use client";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top section with logo and CTA */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 animate-pulse">
            <span className="text-2xl font-bold">5/2</span>
          </div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Join the 5/2 CryptoCoin Revolution
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the future of tokenized value. Connect with our community
            and stay updated on the latest developments.
          </p>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="group relative">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Twitter
              </span>
            </a>

            <a href="#" className="group relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Telegram
              </span>
            </a>

            <a href="#" className="group relative">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/50">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Discord
              </span>
            </a>
          </div>
        </div>

        {/* Contract address section */}
        <div className="text-center mb-12">
          <h4 className="text-lg font-semibold mb-4 text-gray-300">
            Smart Contract
          </h4>
          <div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-2">BSC Contract Address:</p>
            <div className="flex items-center justify-center space-x-2">
              <span className="font-mono text-sm text-purple-400 break-all">
                0x6DfDee06d240fda11427Ca0ebb25D76B5C46daaF
              </span>
              <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-xs transition-colors">
                Copy
              </button>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Token</h4>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                About 5/2 CryptoCoin
              </a>
              <a
                href="#tokenomics"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Tokenomics
              </a>
              <a
                href="#roadmap"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Roadmap
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Trading</h4>
            <div className="space-y-2">
              <a
                href="#how-to-buy"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                How to Buy
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                PancakeSwap
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Add to MetaMask
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Community</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Telegram
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Twitter
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Discord
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Support</h4>
            <div className="space-y-2">
              <a
                href="#faq"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Contact
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Whitepaper
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 5/2 CryptoCoin. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Disclaimer
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Risk Warning
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse"></div>
    </footer>
  );
}
