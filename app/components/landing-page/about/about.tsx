"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="w-full bg-slate-50 py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <Card className="rounded-3xl border border-slate-200 shadow-sm">

            <CardContent className="p-8 md:p-12 text-center">

              <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                About Us
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 font-inter">
                Building Digital Governance for Rural India
              </h2>

              <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-relaxed">
                DigiPanch is focused on simplifying Panchayat
                governance through digital applications,
                grievance systems, AI-powered assistance,
                and secure online services for citizens.
              </p>

              <Link href="/about-us">

                <Button
                  size="lg"
                  className="mt-8 rounded-xl px-6"
                >
                  Learn More
                </Button>

              </Link>

            </CardContent>
          </Card>

        </motion.div>
      </div>
    </section>
  );
}