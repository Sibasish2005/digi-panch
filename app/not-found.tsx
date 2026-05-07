import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

      <div className="text-center">

        <h1 className="text-7xl font-bold tracking-tight text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-slate-800">
          Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-md leading-relaxed text-slate-600">
          The page you are trying to access does not exist
          or may have been moved.
        </p>

        <Link href="/">

          <Button className="mt-8 rounded-xl">
            Back to Homepage
          </Button>

        </Link>

      </div>

    </div>
  );
}