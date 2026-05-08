"use client";

import Link from "next/link";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { Menu, X, User } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/">
          <h1 className="cursor-pointer select-none text-3xl font-bold tracking-tight text-slate-900">
            Digi<span className="text-blue-600">Panch</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/"
              className="text-slate-700 transition hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-slate-700 transition hover:text-blue-600"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/about-us"
              className="text-slate-700 transition hover:text-blue-600"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="text-slate-700 transition hover:text-blue-600"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/contact-us"
              className="text-slate-700 transition hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:block">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button className="rounded-xl bg-blue-600 px-6 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </SignInButton>
          </Show>

          <Show when="signed-in">
            <div className="flex items-center gap-4">
              <Link href="/profile">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 rounded-xl"
                >
                  <User size={18} />
                  Profile
                </Button>
              </Link>

            </div>
          </Show>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-800 md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200 bg-white md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-6">
              <Link
                href="/"
                className="text-slate-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className="text-slate-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>

              <Link
                href="/about-us"
                className="text-slate-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-slate-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/contact-us"
                className="text-slate-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Show when="signed-out">
                <SignInButton mode="modal">
                  <Button className="mt-2 w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
                    Log-in
                  </Button>
                </SignInButton>
              </Show>

              <Show when="signed-in">
                <div className="mt-2 flex items-center gap-4 border-t border-slate-100 pt-6">
                  
                  <Link href="/profile" onClick={() => setIsOpen(false)} className="flex-1">
                    <Button
                      variant="outline"
                      className="flex w-full items-center justify-center gap-2 rounded-xl"
                    >
                      <User size={18} />
                      Profile
                    </Button>
                  </Link>
                </div>
              </Show>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
