"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 px-6 py-20">

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10">

          <Link href="/">

            <Button
              variant="outline"
              className="rounded-xl"
            >
              ← Back to Homepage
            </Button>

          </Link>

          <h1 className="mt-8 text-4xl font-bold text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-600 leading-relaxed">
            DigiPanch values user privacy and is committed to
            protecting personal information shared through
            our digital governance platform.
          </p>

        </div>

        {/* Policy Card */}
        <Card className="rounded-3xl border-none shadow-sm">

          <CardContent className="space-y-10 p-8 md:p-10">

            {/* Section 1 */}
            <div>

              <h2 className="text-2xl font-semibold text-slate-900">
                Information Collection
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                DigiPanch may collect information provided
                during applications, grievance submissions,
                payment processes, and platform interactions
                to improve governance services and user
                experience.
              </p>

            </div>

            <Separator />

            {/* Section 2 */}
            <div>

              <h2 className="text-2xl font-semibold text-slate-900">
                Use of Information
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                Collected data is used to process citizen
                requests, improve platform functionality,
                maintain digital records, and provide secure
                governance-related services.
              </p>

            </div>

            <Separator />

            {/* Section 3 */}
            <div>

              <h2 className="text-2xl font-semibold text-slate-900">
                Data Security
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                DigiPanch follows reasonable security practices
                to protect user information from unauthorized
                access, misuse, or disclosure.
              </p>

            </div>

            <Separator />

            {/* Section 4 */}
            <div>

              <h2 className="text-2xl font-semibold text-slate-900">
                Third-Party Services
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                Certain services such as payment processing
                may involve trusted third-party providers.
                DigiPanch is not responsible for external
                third-party privacy practices.
              </p>

            </div>

            <Separator />

            {/* Section 5 */}
            <div>

              <h2 className="text-2xl font-semibold text-slate-900">
                Policy Updates
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                This privacy policy may be updated periodically
                to reflect platform improvements, regulatory
                changes, or governance requirements.
              </p>

            </div>

            <Separator />

            {/* Section 6 */}
            <div>

              <h2 className="text-2xl font-semibold text-slate-900">
                Contact
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                For questions regarding this privacy policy,
                users may contact the DigiPanch administration
                through the official contact channels provided
                on the platform.
              </p>

            </div>

          </CardContent>
        </Card>

      </div>
    </main>
  );
}