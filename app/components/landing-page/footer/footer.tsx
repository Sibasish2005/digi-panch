"use client";

import Link from "next/link";

import {
  Mail,
  Globe,
  Phone,
  MapPin,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Digi<span className="text-blue-600">Panch</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              Simplifying Panchayat governance through
              AI-powered digital services, grievance systems,
              and citizen-focused online platforms.
            </p>

          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">

            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="transition hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/services"
              className="transition hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              href="/contact-us"
              className="transition hover:text-blue-600"
            >
              Contact
            </Link>

          </div>

          {/* Contact / Icons */}
          <div className="flex items-center gap-3">

            <Button
              size="icon"
              variant="outline"
              className="rounded-xl"
            >
              <Mail className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="rounded-xl"
            >
              <Phone className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="rounded-xl"
            >
              <Globe className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="rounded-xl"
            >
              <MapPin className="h-4 w-4" />
            </Button>

          </div>

        </div>

        {/* Divider */}
        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 DigiPanch. All rights reserved.
          </p>

          <div className="flex justify-center gap-5">

            <Link
              href="/privacy-policy"
              className="transition hover:text-blue-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-blue-600"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}