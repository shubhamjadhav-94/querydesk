"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import axios from "axios";

function DashboardClient({ ownerId }: { ownerId: string }) {
  const navigate = useRouter();
  const [businessName, setBusinessName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSettings = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/settings", {
        ownerId,
        businessName,
        supportEmail,
        knowledge,
      });
      console.log(result.data);
      setLoading(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ownerId) {
      const handleGetDetails = async () => {
        try {
          const result = await axios.post("/api/settings/get", {
            ownerId,
          });
          setBusinessName(result.data.businessName);
          setSupportEmail(result.data.supportEmail);
          setKnowledge(result.data.knowledge);
        } catch (error) {
          console.log(error);
        }
      };
      handleGetDetails();
    }
  }, [ownerId]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
      {/* navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* Logo */}
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

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            {/* Back to Home Button */}
            <button
              onClick={() => navigate.push("/")}
              className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-sm font-semibold shadow-sm hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 active:scale-95 cursor-pointer"
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

              <span>Back to Home</span>
            </button>

            {/* Embed Button */}
            <button
              onClick={() => navigate.push("/embed")}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Embed Chatbot</span>
              <span className="text-base group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Settings Form */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Workspace Settings
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Chatbot Configuration
          </h1>

          <p className="mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Manage your chatbot's business information and knowledge sources to
            deliver accurate and helpful customer support.
          </p>
        </motion.div>

        {/* Business Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm p-6 sm:p-8 mb-6 transition-colors duration-300"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-zinc-800 dark:text-zinc-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01M14 13v.01M14 16v.01M14 19v.01"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Business Information
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                Set up your business profile so your chatbot can represent your
                brand and assist customers effectively.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Business Name
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/10 focus:border-zinc-400 dark:focus:border-zinc-500 transition"
                placeholder="Enter your business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Support Email Address
              </label>

              <input
                type="email"
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/10 focus:border-zinc-400 dark:focus:border-zinc-500 transition"
                placeholder="Enter your customer support email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
              />

              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
                Customers can use this email to contact your business.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Knowledge Base Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm p-6 sm:p-8 mb-8 transition-colors duration-300"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-zinc-800 dark:text-zinc-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7v14m0-14C10.5 5.5 8.5 5 5 5v14c3.5 0 5.5.5 7 2m0-14c1.5-1.5 3.5-2 7-2v14c-3.5 0-5.5.5-7 2"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Knowledge Base
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                Provide essential business information to help your chatbot
                understand your products, services and policies.
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Business Knowledge
            </label>

            <textarea
              className="w-full min-h-64 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800 px-4 py-4 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/10 focus:border-zinc-400 dark:focus:border-zinc-500 transition resize-y leading-relaxed"
              placeholder={`Add your business information here...

Examples:
• Products and services offered
• Frequently asked questions (FAQs)
• Shipping and delivery policies
• Return and refund policies
• Available payment methods
• Customer support hours`}
              onChange={(e) => setKnowledge(e.target.value)}
              value={knowledge}
            />

            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-3">
              Keep your information clear, accurate and well-organized for more
              helpful chatbot responses.
            </p>
          </div>
        </motion.div>

        {/* Save Changes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Remember to save your changes before leaving this page.
          </p>

          <div className="flex items-center gap-4">
            {saved && (
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
               className="text-sm font-medium text-emerald-600 dark:text-emerald-400"
              >
                ✓ Changes saved successfully!
              </motion.span>
            )}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              onClick={handleSettings}
              className="px-7 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-sm"
            >
              {loading ? "Saving Changes..." : "Save Changes →"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DashboardClient;
