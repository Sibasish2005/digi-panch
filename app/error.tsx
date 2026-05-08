"use client";

import { useEffect } from "react";

import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import {
  AlertTriangle,
  RefreshCcw,
  Home,
} from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >

        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">

          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

            <AlertTriangle className="h-10 w-10 text-red-600" />

          </div>

          {/* Heading */}
          <div className="mt-8 text-center">

            <h1 className="text-4xl font-bold text-slate-900">
              Something went wrong
            </h1>

            <p className="mt-4 leading-relaxed text-slate-600">
              An unexpected error occurred while loading
              the application. Please try again or
              return to the homepage.
            </p>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

            <Button
              onClick={() => reset()}
              className="rounded-xl"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>

            <Link href="/">

              <Button
                variant="outline"
                className="w-full rounded-xl sm:w-auto"
              >
                <Home className="mr-2 h-4 w-4" />
                Homepage
              </Button>

            </Link>

          </div>

        </div>

      </motion.div>

    </div>
  );
}