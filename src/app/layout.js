// src/app/layout.js

import "./globals.css";

export const metadata = {
  title: "5/2 CryptoCoin",
  description:
    "Official landing page for 5/2 CryptoCoin - Explore tokenomics, smart contract, and how to buy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}