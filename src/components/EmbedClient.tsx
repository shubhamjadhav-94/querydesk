"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "motion/react";

function EmbedClient({ ownerId }: { ownerId: string }) {
  const navigate = useRouter();
  const [copied, setCopied] = useState(false);
  const embedCode = `<script
  src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js"
  data-owner-id="${ownerId}">
</script>`;
  const copyCode = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* QueryDesk Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate.push("/")}
          >
            <div className="w-9 h-9 rounded-xl bg-black dark:bg-white flex items-center justify-center shadow-md transition-colors duration-300">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white dark:text-black"
                fill="none"
              >
                <path
                  d="M5 5.5A3.5 3.5 0 0 1 8.5 2h7A3.5 3.5 0 0 1 19 5.5v7a3.5 3.5 0 0 1-3.5 3.5H11l-4.5 3v-3.4A3.5 3.5 0 0 1 5 12.5z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 8h6M9 11h4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Query
              <span className="text-zinc-400 dark:text-zinc-500">Desk</span>
            </span>
          </div>

          {/* Back to Dashboard */}

          <button
            onClick={() => navigate.push("/dashboard")}
            className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 text-sm font-semibold shadow-sm hover:border-zinc-900 dark:hover:border-zinc-500 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:shadow-lg transition-all duration-300 ease-out cursor-pointer"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 18l-6-6 6-6M9 12h12"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Dashboard
          </button>
        </div>
      </motion.div>

      {/* Embed Code Section */}
      <div className="flex justify-center px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-6xl"
        >
          {/* Page Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-bold tracking-[0.15em] text-zinc-500 dark:text-zinc-400 uppercase">
                Website Integration
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white leading-tight">
              Bring QueryDesk to
              <span className="block text-zinc-400 dark:text-zinc-500">
                Your Website.
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-7 max-w-2xl">
              Integrate your AI-powered customer support chatbot into your
              website with a simple embed script. Follow the steps below to get
              started.
            </p>
          </div>

          {/* Main Integration Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Installation Section */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
              {/* Card Header */}
              <div className="p-6 sm:p-7 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M8 17l-5-5 5-5M16 7l5 5-5 5M14 4l-4 16"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                        Installation Code
                      </h2>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Copy this script to connect your chatbot.
                    </p>
                  </div>

                  <span className="hidden sm:inline-flex text-[10px] font-bold tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 px-2.5 py-1.5 rounded-full">
                    READY TO INSTALL
                  </span>
                </div>
              </div>

              {/* Code Editor */}
              <div className="p-5 sm:p-7">
                <div className="bg-zinc-950 rounded-xl overflow-hidden shadow-lg">
                  {/* Editor Topbar */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>

                    <span className="text-xs text-zinc-400 font-mono">
                      embed-script.html
                    </span>
                  </div>

                  {/* Actual Embed Code */}
                  <div className="relative p-5 min-h-36.25">
                    <pre className="overflow-x-auto whitespace-pre-wrap break-all text-[12px] sm:text-[13px] leading-7 text-emerald-300 font-mono pr-2">
                      {embedCode}
                    </pre>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={copyCode}
                  className={`group w-full mt-4 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    copied
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-700 dark:hover:bg-zinc-200 hover:shadow-lg active:scale-[0.98]"
                  }`}
                >
                  {copied ? (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12l4 4L19 6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Code Copied Successfully
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4 transition-transform group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="8"
                          y="8"
                          width="12"
                          height="12"
                          rx="2"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                      Copy Embed Code
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-xs text-zinc-400">
                  Add this script to your website to install QueryDesk.
                </p>
              </div>

              {/* Installation Steps */}
              <div className="px-5 sm:px-7 pb-7">
                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-6">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-5">
                    Installation Guide
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        01
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                          Copy your embed script
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-5">
                          Click the button above to copy your unique chatbot
                          code.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        02
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                          Add it to your website
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-5">
                          Paste the script before the closing body tag in your
                          website's HTML.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        03
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                          Publish and test
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-5">
                          Reload your website and check whether the chatbot
                          widget appears.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Live Preview */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
              {/* Preview Header */}
              <div className="p-6 sm:p-7 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-zinc-800 dark:text-zinc-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="16"
                        rx="2"
                        strokeWidth="1.8"
                      />
                      <path d="M3 9h18" strokeWidth="1.8" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Live Preview
                  </h2>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  A visual example of how your chatbot widget may appear.
                </p>
              </div>

              {/* Browser Preview */}
              <div className="p-5 sm:p-7">
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-sm transition-colors duration-300">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 px-4 h-11 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />

                    <div className="ml-3 flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md px-3 py-1 text-[10px] text-zinc-400 dark:text-zinc-500 truncate">
                      https://your-website.com
                    </div>
                  </div>

                  {/* Website Canvas */}
                  <div className="relative h-85 sm:h-97.5 bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 p-5 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        YOUR WEBSITE
                      </span>
                      <div className="flex gap-2">
                        <span className="w-8 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                        <span className="w-8 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                        <span className="w-8 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      </div>
                    </div>

                    <div className="mt-12 space-y-3">
                      <div className="w-3/4 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                      <div className="w-1/2 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                      <div className="w-2/3 h-2 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                      <div className="mt-7 w-24 h-8 rounded-lg bg-zinc-300/70 dark:bg-zinc-600/70" />
                    </div>

                    {/* Chat Window */}
                    <div className="absolute bottom-22.5 right-4 sm:right-6 w-58.75 sm:w-65 bg-white rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden">
                      <div className="bg-zinc-950 text-white px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M5 5.5A3.5 3.5 0 0 1 8.5 2h7A3.5 3.5 0 0 1 19 5.5v7a3.5 3.5 0 0 1-3.5 3.5H11l-4.5 3v-3.4A3.5 3.5 0 0 1 5 12.5z"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs font-semibold">
                              Customer Support
                            </p>
                            <p className="text-[9px] text-zinc-400">
                              Typically replies instantly
                            </p>
                          </div>
                        </div>
                        <span className="text-zinc-400 text-sm">×</span>
                      </div>

                      <div className="p-3 space-y-3 bg-zinc-50 min-h-38.75">
                        <div className="bg-white border border-zinc-200 text-zinc-700 text-[10px] px-3 py-2.5 rounded-xl rounded-tl-sm w-fit max-w-[90%] shadow-sm">
                          Hi! Welcome. How can I help you today?
                        </div>

                        <div className="bg-zinc-900 text-white text-[10px] px-3 py-2.5 rounded-xl rounded-tr-sm ml-auto w-fit max-w-[90%]">
                          I need help with a product.
                        </div>

                        <div className="bg-white border border-zinc-200 text-zinc-700 text-[10px] px-3 py-2.5 rounded-xl rounded-tl-sm w-fit shadow-sm">
                          Sure! I'd be happy to help.
                        </div>
                      </div>

                      <div className="p-2.5 bg-white border-t border-zinc-100">
                        <div className="flex items-center justify-between border border-zinc-200 rounded-lg px-3 py-2">
                          <span className="text-[10px] text-zinc-400">
                            Type your message...
                          </span>
                          <span className="text-xs text-zinc-500">↑</span>
                        </div>
                      </div>
                    </div>

                    {/* Chat Launcher */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-zinc-950 text-white flex items-center justify-center shadow-xl"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 5.5A3.5 3.5 0 0 1 8.5 2h7A3.5 3.5 0 0 1 19 5.5v7a3.5 3.5 0 0 1-3.5 3.5H11l-4.5 3v-3.4A3.5 3.5 0 0 1 5 12.5z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700 p-3.5 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 shrink-0 text-zinc-500 dark:text-zinc-400 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" strokeWidth="1.7" />
                    <path
                      d="M12 11v5M12 8h.01"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-[11px] leading-5 text-zinc-500 dark:text-zinc-400">
                    This is a visual mockup. Your actual chatbot appearance may
                    vary depending on its configuration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default EmbedClient;
