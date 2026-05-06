"use client";

import Link from "next/link";

import { Bot } from "lucide-react";

import { motion } from "framer-motion";

export default function FloatingChatbotButton() {
  return (
    <Link href="/chatbot">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-[100]"
      >

        {/* Glow Effect */}
        <div className="absolute inset-0 animate-pulse rounded-full bg-blue-400/40 blur-2xl" />

        {/* Floating Robot Button */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-2xl ring-4 ring-blue-200 transition-all hover:shadow-blue-400">

          <Bot
            size={32}
            className="text-white"
          />

        </div>

      </motion.div>

    </Link>
  );
}