"use client";

import { useEffect } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

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
    <html>
      <body>

        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

          <div className="max-w-lg text-center">

            {/* Error Code */}
            <h1 className="text-7xl font-bold tracking-tight text-slate-900">
              Error
            </h1>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-semibold text-slate-800">
              Something went wrong
            </h2>

            {/* Description */}
            <p className="mt-5 leading-relaxed text-slate-600">
              An unexpected error occurred while loading
              the application. Please try again or
              return to the homepage.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Button
                onClick={() => reset()}
                className="rounded-xl"
              >
                Try Again
              </Button>

              <Link href="/">

                <Button
                  variant="outline"
                  className="rounded-xl"
                >
                  Back to Homepage
                </Button>

              </Link>

            </div>

          </div>

        </div>

      </body>
    </html>
  );
}