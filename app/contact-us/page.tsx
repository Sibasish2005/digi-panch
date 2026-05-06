"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Separator } from "@/components/ui/separator";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 px-6 py-20">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <Link href="/">

            <Button
              variant="outline"
              className="rounded-xl"
            >
              ← Back to Homepage
            </Button>

          </Link>

          <h1 className="mt-8 text-4xl font-bold text-slate-900 md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-600">
            Reach out to DigiPanch for support, governance
            assistance, platform inquiries, or citizen-related
            services.
          </p>

        </motion.div>

        {/* Main Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Email */}
            <Card className="rounded-3xl border-none shadow-sm">

              <CardContent className="flex items-start gap-5 p-6">

                <div className="rounded-2xl bg-blue-100 p-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    Email Support
                  </h3>

                  <p className="mt-2 text-slate-600">
                    support@digipanch.com
                  </p>

                </div>

              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="rounded-3xl border-none shadow-sm">

              <CardContent className="flex items-start gap-5 p-6">

                <div className="rounded-2xl bg-green-100 p-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    Phone
                  </h3>

                  <p className="mt-2 text-slate-600">
                    +91 XXXXX XXXXX
                  </p>

                </div>

              </CardContent>
            </Card>

            {/* Address */}
            <Card className="rounded-3xl border-none shadow-sm">

              <CardContent className="flex items-start gap-5 p-6">

                <div className="rounded-2xl bg-red-100 p-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    Office Address
                  </h3>

                  <p className="mt-2 leading-relaxed text-slate-600">
                    DigiPanch Governance Office
                    <br />
                    Rural Digital Administration Center
                  </p>

                </div>

              </CardContent>
            </Card>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <Card className="rounded-3xl border-none shadow-sm">

              <CardContent className="p-8">

                <h2 className="text-2xl font-bold text-slate-900">
                  Send a Message
                </h2>

                <p className="mt-3 text-slate-600">
                  Fill out the form below and our team will
                  get back to you.
                </p>

                <Separator className="my-6" />

                {/* Form */}
                <form className="space-y-5">

                  {/* Name */}
                  <div>

                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>

                    <Input
                      placeholder="Enter your name"
                      className="rounded-xl"
                    />

                  </div>

                  {/* Email */}
                  <div>

                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>

                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-xl"
                    />

                  </div>

                  {/* Subject */}
                  <div>

                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Subject
                    </label>

                    <Input
                      placeholder="Enter subject"
                      className="rounded-xl"
                    />

                  </div>

                  {/* Message */}
                  <div>

                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Message
                    </label>

                    <Textarea
                      placeholder="Write your message..."
                      className="min-h-[140px] rounded-xl"
                    />

                  </div>

                  {/* Submit */}
                  <Button
                    className="w-full rounded-xl bg-blue-600 hover:bg-blue-700"
                  >
                    Send Message
                  </Button>

                </form>

              </CardContent>
            </Card>

          </motion.div>

        </div>

      </div>
    </main>
  );
}