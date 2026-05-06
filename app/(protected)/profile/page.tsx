import { auth } from "@clerk/nextjs/server";
import { 
  User, Mail, Phone, MapPin, Edit3, 
  FileText, CheckCircle, Bell, Shield, Settings,
  ChevronRight, BadgeCheck
} from "lucide-react";
import FloatingChatbotButton from "../chatbot/chatbot";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="mx-auto max-w-6xl">
        <FloatingChatbotButton />
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center lg:p-8">
          
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full md:w-auto text-center sm:text-left">
            
            {/* Profile Avatar */}
            <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-full bg-blue-50 ring-4 ring-blue-100">
              <User className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />
              <div className="absolute bottom-0 right-0 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-white">
                <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
            </div>

            <div className="mt-2 sm:mt-0">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Sibasish Chakraborti
              </h1>
              <p className="mt-1 text-sm sm:text-base text-slate-500">
                Citizen Account • DigiPanch User
              </p>

              <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Verified User
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Active Account
                </span>
              </div>
            </div>
          </div>

          <button className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Edit3 className="h-4 w-4" />
            Edit Profile
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">

          {/* Left Section */}
          <div className="space-y-6 lg:col-span-1">

            {/* Personal Info */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Personal Information</h2>
              </div>

              <div className="space-y-4 sm:space-y-5">
                
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Email Address</p>
                    <p className="mt-1 truncate text-sm font-medium text-slate-900">
                      sibasish@example.com
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-colors group-hover:bg-green-50 group-hover:text-green-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Phone Number</p>
                    <p className="mt-1 truncate text-sm font-medium text-slate-900">
                      +91 9876543210
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-colors group-hover:bg-orange-50 group-hover:text-orange-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Location</p>
                    <p className="mt-1 text-sm font-medium text-slate-900">
                      Agartala, Tripura
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Account Stats */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-semibold text-slate-900">Activity Overview</h2>

              <div className="space-y-3">
                <div className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                    <span className="text-sm font-medium text-slate-600">Applications</span>
                  </div>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">12</span>
                </div>

                <div className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
                  <div className="flex items-center gap-3">
                    <Bell className="h-4 w-4 text-slate-400 group-hover:text-orange-500" />
                    <span className="text-sm font-medium text-slate-600">Complaints</span>
                  </div>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">4</span>
                </div>

                <div className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-slate-400 group-hover:text-purple-500" />
                    <span className="text-sm font-medium text-slate-600">Documents</span>
                  </div>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">7</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="space-y-6 lg:col-span-2">

            {/* Recent Activity */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Recent Activity</h2>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  View All
                </button>
              </div>

              <div className="relative space-y-0 before:absolute before:inset-y-0 before:left-6 before:w-[2px] before:bg-slate-100">
                
                {/* Timeline Item 1 */}
                <div className="relative flex items-start gap-4 pb-6 last:pb-0">
                  <div className="absolute left-6 top-10 -ml-px h-full w-[2px] bg-slate-100"></div>
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 ring-8 ring-white">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-semibold text-slate-900">Income Certificate Submitted</h3>
                      <span className="mt-1 sm:mt-0 text-xs text-slate-500">2 days ago</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">Your application is currently under review by the authorities.</p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-start gap-4 pb-6 last:pb-0">
                  <div className="absolute left-6 top-10 -ml-px h-full w-[2px] bg-slate-100"></div>
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 ring-8 ring-white">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-semibold text-slate-900">Complaint Resolved</h3>
                      <span className="mt-1 sm:mt-0 text-xs text-slate-500">1 week ago</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">Road maintenance complaint (#CMP-842) was marked as resolved.</p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-start gap-4 pb-6 last:pb-0">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 ring-8 ring-white">
                    <Bell className="h-5 w-5 text-orange-600" />
                  </div>
                  <div className="flex-1 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-semibold text-slate-900">New Notification</h3>
                      <span className="mt-1 sm:mt-0 text-xs text-slate-500">2 weeks ago</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">Gram Sabha meeting scheduled for next week. Your presence is requested.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Security Section */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-5 text-xl font-semibold text-slate-900">Security & Preferences</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <button className="group flex flex-col items-start rounded-xl border border-slate-200 p-5 text-left transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover:bg-slate-200">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Security Settings</h3>
                  <p className="mt-1 text-sm text-slate-500">Update password and 2FA.</p>
                </button>

                <button className="group flex flex-col items-start rounded-xl border border-slate-200 p-5 text-left transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover:bg-slate-200">
                    <Settings className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Notification Preferences</h3>
                  <p className="mt-1 text-sm text-slate-500">Manage alerts and emails.</p>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
