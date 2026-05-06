"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Bot,
  Landmark,
  AlertCircle,
  Receipt,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  return (
    <section className="relative w-full bg-white py-24 px-6 overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Smart Digital Services
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 font-inter">
            Transforming Rural Governance
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Intelligent digital services designed to simplify
            Panchayat administration, payments, citizen support,
            and governance operations.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-6">

          {/* AI CHATBOT */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative md:col-span-4 rounded-[32px] border border-white/20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 p-8 text-white overflow-hidden"
          >

            {/* Glow */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"></div>

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/10">
                    <Bot className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-widest text-cyan-200">
                      AI Powered
                    </p>

                    <h3 className="text-3xl font-bold mt-1">
                      Panchayat Assistant
                    </h3>
                  </div>
                </div>

                <ArrowUpRight className="h-6 w-6 text-cyan-200 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <p className="mt-8 max-w-2xl text-slate-200 leading-relaxed text-lg">
                Get instant AI assistance for certificates,
                taxes, schemes, land records, grievances,
                and citizen services through an intelligent
                conversational system.
              </p>

              {/* Bottom Feature Pills */}
              <div className="mt-10 flex flex-wrap gap-3">

                <div className="rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                  24/7 Support
                </div>

                <div className="rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                  AI Responses
                </div>

                <div className="rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                  Smart Suggestions
                </div>

              </div>
            </div>
          </motion.div>

          {/* DOCUMENTS */}
          <motion.div
            whileHover={{ y: -4 }}
            className="group rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all md:col-span-2"
          >

            <div className="flex items-center justify-between">

              <div className="rounded-2xl bg-blue-50 p-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>

              <ArrowUpRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Digital Documents
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Apply and manage official certificates,
              approvals, and land-related documentation online.
            </p>

            <div className="mt-8 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-[75%] rounded-full bg-blue-500"></div>
            </div>

          </motion.div>

          {/* GRIEVANCE */}
          <motion.div
            whileHover={{ y: -4 }}
            className="group md:col-span-3 rounded-[32px] bg-gradient-to-br from-red-500 to-orange-500 p-6 text-white overflow-hidden relative"
          >

            <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                  <AlertCircle className="h-6 w-6" />
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                  <span className="h-2 w-2 rounded-full bg-green-300 animate-pulse"></span>
                  Live Tracking
                </div>
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                Grievance System
              </h3>

              <p className="mt-4 text-orange-50 leading-relaxed">
                Submit issues digitally and monitor complaint
                progress with transparent updates and real-time
                status tracking.
              </p>

            </div>
          </motion.div>

          {/* PAYMENTS */}
          <motion.div
            whileHover={{ y: -4 }}
            className="group md:col-span-3 rounded-[32px] border border-slate-200 bg-slate-50 p-6 overflow-hidden relative"
          >

            <div className="absolute top-0 right-0 h-32 w-32 bg-green-200 rounded-full blur-3xl opacity-40"></div>

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="rounded-2xl bg-green-100 p-4">
                  <Landmark className="h-6 w-6 text-green-700" />
                </div>

                <div className="rounded-full border border-green-200 bg-white px-4 py-1 text-sm font-medium text-green-700 shadow-sm">
                  Razorpay Integrated
                </div>
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                Utility Payments
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Pay land taxes and water bills securely with
                instant verification and downloadable receipts.
              </p>

              {/* Receipt Box */}
              <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm border border-slate-100">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-slate-100 p-3">
                    <Receipt className="h-5 w-5 text-slate-700" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      Auto Generated Receipts
                    </p>

                    <p className="text-sm text-gray-500">
                      Download payment proof anytime.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}