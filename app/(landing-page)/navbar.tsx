"use client";

import React, { useState } from "react";
import { ThemeToggle } from "../CustomComponents/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  let navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Status",
      href: "/status",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="relative">
      <div className="md:px-10 px-4 flex items-center justify-between border-b border-border py-4 bg-background z-50">
        {/* Logo Section */}
        <div className="flex flex-row items-center">
          <img
            src="project_logo.png"
            alt="Logo"
            className="p-0 sm:w-48 w-40 h-10 sm:h-12 m-0 object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex">
          <Card className="flex flex-row px-2 md:px-4 py-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </Card>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex flex-row gap-4 items-center">
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
          <div className="flex flex-row gap-4">
            <Button variant="outline">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-md z-40">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-4 py-2 text-base font-medium hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <Button variant="outline" className="w-full">
              Login
            </Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </div>
  );
}
