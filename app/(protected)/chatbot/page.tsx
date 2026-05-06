"use client";

import { useState } from "react";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Welcome to DigiPanch Assistant 👋 How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    const botMessage = {
      role: "bot",
      text: "This is a demo AI response for DigiPanch services.",
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6 md:p-10">
      <div className="mx-auto flex h-[85vh] max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

        {/* Sidebar */}
        <div className="hidden w-80 border-r border-slate-200 bg-slate-50 lg:flex lg:flex-col">

          <div className="border-b border-slate-200 p-6">
            <h1 className="text-2xl font-bold text-slate-900">
              DigiPanch AI
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Smart village governance assistant
            </p>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-5">

            <button className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-blue-300 hover:bg-blue-50">
              <h3 className="font-semibold text-slate-900">
                Income Certificate
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Ask about application process
              </p>
            </button>

            <button className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-blue-300 hover:bg-blue-50">
              <h3 className="font-semibold text-slate-900">
                Complaint Registration
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Learn complaint filing steps
              </p>
            </button>

            <button className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-blue-300 hover:bg-blue-50">
              <h3 className="font-semibold text-slate-900">
                Welfare Schemes
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Explore government schemes
              </p>
            </button>

            <button className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-blue-300 hover:bg-blue-50">
              <h3 className="font-semibold text-slate-900">
                DigiPanch Help
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Platform guidance and support
              </p>
            </button>

          </div>

        </div>

        {/* Chat Section */}
        <div className="flex flex-1 flex-col">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 p-5">

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                AI Assistant Chat
              </h2>

              <p className="text-sm text-slate-500">
                Powered by DigiPanch Intelligence
              </p>
            </div>

            <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Online
            </div>

          </div>

          {/* Messages */}
          <div className="flex-1 space-y-6 overflow-y-auto bg-slate-50 p-6">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-3xl px-5 py-4 shadow-sm ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

          </div>

          {/* Input */}
          <div className="border-t border-slate-200 bg-white p-5">

            <div className="flex items-center gap-4">

              <input
                type="text"
                placeholder="Ask something about DigiPanch services..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                className="flex-1 rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <button
                onClick={handleSend}
                className="rounded-2xl bg-blue-600 px-6 py-4 font-medium text-white transition hover:bg-blue-700"
              >
                Send
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
