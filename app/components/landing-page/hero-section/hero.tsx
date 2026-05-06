"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/herosection/hero1.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">

        <div className="max-w-5xl text-center">

          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>

            <p className="text-sm text-white font-inter">
              AI Powered Rural Administration
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="font-inter font-bold leading-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Digitization of <br />

            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Gram Panchayat Governance
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="mt-6 mx-auto max-w-3xl text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed font-inter"
          >
            Empowering rural governance with AI-driven digital
            solutions, transparent administration, and citizen-first
            services for modern Panchayat systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:bg-blue-700 transition font-inter"
              >
                Explore Services
              </motion.button>
            </Link>

            <Link href="/about-us">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto rounded-xl border border-white/30 px-8 py-4 text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition font-inter"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}