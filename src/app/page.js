// src/app/page.js
"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/AboutFTV";
import Tokenomics from "@/components/Tokenomics";
import SmartContractInfo from "@/components/SmartContractInfo";
import HowToBuy from "@/components/HowToBuy";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>5/2 CryptoCoin</title>
        <meta
          name="description"
          content="Official landing page for FTV Token - Explore tokenomics, smart contract, and how to buy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="pt-20">
        <Navbar />
        <Hero />
        <About />
        <Tokenomics />
        <SmartContractInfo />
        <HowToBuy />
        <SocialLinks />
        <Footer />
      </main>
    </>
  );
}