"use client";

import Image from "next/image";

import {
  useUser,
  useClerk,
} from "@clerk/nextjs";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  Mail,
  LogOut,
} from "lucide-react";

export default function ProfilePage() {

  const { user } = useUser();

  const { signOut } = useClerk();

  return (
    <main className="min-h-screen w-full bg-slate-50 px-6 py-20">

      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-3 text-slate-600">
            View your account information and manage your session.
          </p>

        </div>

        {/* Profile Card */}
        <Card className="rounded-3xl border-none shadow-sm">

          <CardContent className="p-8">

            {/* User Info */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center sm:gap-6">

              {/* Profile Image */}
              <div className="relative h-24 w-24 overflow-hidden rounded-full border">

                <Image
                  src={user?.imageUrl || "/default-avatar.png"}
                  alt="Profile"
                  fill
                  className="object-cover"
                />

              </div>

              {/* Details */}
              <div className="mt-5 sm:mt-0">

                <h2 className="text-2xl font-semibold text-slate-900">
                  {user?.fullName || "User"}
                </h2>

                <div className="mt-2 flex items-center justify-center gap-2 text-slate-600 sm:justify-start">

                  <Mail className="h-4 w-4" />

                  <p className="text-sm">
                    {user?.primaryEmailAddress?.emailAddress}
                  </p>

                </div>

              </div>

            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-slate-200"></div>

            {/* Logout Section */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  Logout
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  End your current session securely.
                </p>

              </div>

              <Button
                variant="destructive"
                className="rounded-xl"
                onClick={() => signOut()}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>

            </div>

          </CardContent>
        </Card>

      </div>
    </main>
  );
}