import { auth } from "@clerk/nextjs/server";
import { 
  FileText, CheckCircle, Clock, Bell, Home, Sprout, 
  PiggyBank, FolderOpen, FileDown, PlusCircle, ChevronRight,
  ArrowRight
} from "lucide-react";
import FloatingChatbotButton from "../chatbot/chatbot";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="mx-auto max-w-7xl">
        <FloatingChatbotButton />

        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-200 md:flex-row md:items-center md:justify-between lg:p-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              DigiPanch Dashboard
            </h1>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Manage applications, certificates, complaints, and village services efficiently.
            </p>
          </div>
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:w-auto">
            <PlusCircle className="h-5 w-5" />
            Apply New Service
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Applications</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">12</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                <FileText className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Approved Certificates</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">7</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-100">
                <CheckCircle className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-orange-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Pending Requests</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">3</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-100">
                <Clock className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-purple-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Notifications</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">5</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-100">
                <Bell className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-3">
          
          {/* Left Side */}
          <div className="space-y-6 lg:col-span-2">
            
            {/* Apply Services */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Apply For Services</h2>
                <button className="flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700">
                  View All <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <button className="group flex flex-col items-start rounded-xl border border-slate-200 p-5 text-left transition-all hover:border-blue-600 hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Income Certificate</h3>
                  <p className="mt-1 text-sm text-slate-500">Apply for official income verification certificate.</p>
                </button>

                <button className="group flex flex-col items-start rounded-xl border border-slate-200 p-5 text-left transition-all hover:border-blue-600 hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
                    <Home className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Residence Certificate</h3>
                  <p className="mt-1 text-sm text-slate-500">Verify permanent residential address.</p>
                </button>

                <button className="group flex flex-col items-start rounded-xl border border-slate-200 p-5 text-left transition-all hover:border-blue-600 hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600 group-hover:bg-green-100">
                    <Sprout className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Farmer Assistance</h3>
                  <p className="mt-1 text-sm text-slate-500">Apply for agricultural and farming schemes.</p>
                </button>

                <button className="group flex flex-col items-start rounded-xl border border-slate-200 p-5 text-left transition-all hover:border-blue-600 hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-100">
                    <PiggyBank className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Pension Scheme</h3>
                  <p className="mt-1 text-sm text-slate-500">Apply for pension and welfare benefits.</p>
                </button>
              </div>
            </div>

            {/* Certificates */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Recent Certificates</h2>
                <button className="flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700">
                  History <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="group flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3 sm:items-center">
                    <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 sm:flex">
                      <FileDown className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Income Certificate</h3>
                      <p className="text-sm text-slate-500">Approved on 24 May 2026</p>
                    </div>
                  </div>
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 hover:ring-blue-300 sm:w-auto">
                    <FileDown className="h-4 w-4" />
                    Download PDF
                  </button>
                </div>

                <div className="group flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3 sm:items-center">
                    <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 sm:flex">
                      <FileDown className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Residence Certificate</h3>
                      <p className="text-sm text-slate-500">Approved on 18 May 2026</p>
                    </div>
                  </div>
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 hover:ring-blue-300 sm:w-auto">
                    <FileDown className="h-4 w-4" />
                    Download PDF
                  </button>
                </div>

                <div className="group flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3 sm:items-center">
                    <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 sm:flex">
                      <FileDown className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Farmer Subsidy Approval</h3>
                      <p className="text-sm text-slate-500">Approved on 10 May 2026</p>
                    </div>
                  </div>
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 hover:ring-blue-300 sm:w-auto">
                    <FileDown className="h-4 w-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-semibold text-slate-900">Quick Actions</h2>
              <div className="space-y-3">
                <button className="group flex w-full items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 text-left text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <PlusCircle className="h-5 w-5" />
                  <span className="flex-1">New Complaint</span>
                  <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
                </button>

                <button className="group flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  <FolderOpen className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                  <span className="flex-1">View Applications</span>
                </button>

                <button className="group flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  <FileDown className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                  <span className="flex-1">Download Documents</span>
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Notifications</h2>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">3</span>
              </div>

              <div className="space-y-4">
                <div className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-blue-500">
                  <h3 className="text-sm font-medium text-slate-900">Application Approved</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Your income certificate is approved.</p>
                  <p className="mt-1 text-xs font-medium text-blue-600">Just now</p>
                </div>

                <div className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-orange-500">
                  <h3 className="text-sm font-medium text-slate-900">Meeting Reminder</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Gram Sabha meeting scheduled tomorrow.</p>
                  <p className="mt-1 text-xs font-medium text-slate-400">2 hours ago</p>
                </div>

                <div className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-green-500">
                  <h3 className="text-sm font-medium text-slate-900">New Scheme Available</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Farmer assistance scheme applications are open.</p>
                  <p className="mt-1 text-xs font-medium text-slate-400">1 day ago</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
