"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import axios from "axios";
import FAQSection from "./FAQSection";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function HomeClient({ email }: { email: string }) {
  const [loading, setLoading] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const handleLogin = async () => {
    setLoading(true);
    window.location.href = "/api/auth/login";
  };
  const firstLetter = email?.charAt(0)?.toUpperCase() || "";
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navigate = useRouter();

  // Live Demo Chat States
  const [demoInput, setDemoInput] = useState("");

  const [demoMessages, setDemoMessages] = useState<
    { role: "assistant" | "user"; text: string }[]
  >([
    {
      role: "assistant",
      text: "Hi! Welcome to QueryDesk. I'm your AI support assistant. How can I help you today?",
    },
  ]);

  const demoQuestions = [
    "What services do you offer?",
    "How can I contact support?",
    "Do you offer Cash on Delivery?",
  ];

  const getDemoResponse = (question: string) => {
    const message = question.toLowerCase();

    if (message.includes("delivery") || message.includes("cod")) {
      return "Yes! Cash on Delivery may be available depending on your location and order. Please check with the store for confirmation.";
    }

    if (message.includes("contact") || message.includes("support")) {
      return "You can contact our support team through the business support email or contact page.";
    }

    if (message.includes("service")) {
      return "We provide customer-focused services and support. Please check the business website for the complete service details.";
    }

    return "Thanks for your question! I'm a QueryDesk demo assistant. In the live product, I would use the business knowledge base to provide a relevant answer.";
  };

  const handleDemoSend = (question?: string) => {
    const message = (question ?? demoInput).trim();

    if (!message) return;

    const response = getDemoResponse(message);

    setDemoMessages((previous) => [
      ...previous,
      { role: "user", text: message },
      { role: "assistant", text: response },
    ]);

    setDemoInput("");
  };

  const handleLogout = async () => {
    try {
      const result = await axios.get("/api/auth/logout");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden">
      {/* NAVBAR */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* QueryDesk Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <div className="w-9 h-9 rounded-xl bg-black dark:bg-white flex items-center justify-center shadow-md transition-colors duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white dark:text-black" fill="none">
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
  Query<span className="text-zinc-400 dark:text-zinc-500">Desk</span>
</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            {[
              { name: "Features", href: "#features" },
              { name: "How It Works", href: "#how-it-works" },
              { name: "Live Demo", href: "#live-demo" },
              { name: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white group"
              >
                {link.name}

                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-black dark:bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300 cursor-pointer"
              aria-label="Toggle dark and light mode"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6.5 6.5 0 0 0 8.268 8.268c.344-.215.825-.003.803.401" />
                </svg>
              )}
            </button>
            {email ? (
              <div className="relative" ref={popupRef}>
                <button
                  className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition cursor-pointer"
                  onClick={() => setOpen(!open)}
                  aria-label="Open profile menu"
                >
                  {firstLetter}
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-48 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden"
                    >
                      <button
                        className="w-full text-left px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
                        onClick={() => navigate.push("/dashboard")}
                      >
                        Dashboard
                      </button>

                      <button
                        className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                className="hidden sm:flex px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition disabled:opacity-60 cursor-pointer"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "Redirecting..." : "Get Started"}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span className="text-xl">{mobileOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
            >
              <nav className="px-6 py-5 flex flex-col gap-5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <a href="#feature" onClick={() => setMobileOpen(false)}>
                  Features
                </a>

                <a href="#how-it-works" onClick={() => setMobileOpen(false)}>
                  How It Works
                </a>

                <a href="#live-demo" onClick={() => setMobileOpen(false)}>
                  Live Demo
                </a>

                <a href="#faq" onClick={() => setMobileOpen(false)}>
                  FAQ
                </a>

                {!email && (
                  <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-60"
                  >
                    {loading ? "Redirecting..." : "Get Started"}
                  </button>
                )}

                {email && (
                  <>
                    <button
                      onClick={() => navigate.push("/dashboard")}
                      className="text-left"
                    >
                      Dashboard
                    </button>

                    <button
                      onClick={handleLogout}
                      className="text-left text-red-600"
                    >
                      Logout
                    </button>
                  </>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-zinc-600 dark:text-zinc-300 mb-7">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              AI-Powered Customer Support
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight">
              Customer Support,
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">
                Reimagined with AI.
              </span>
            </h1>

            <p className="mt-7 text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
              Turn your business knowledge into an intelligent AI assistant.
              Help customers get instant answers, automate support, and deliver
              better experiences — all from your website.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              {email ? (
                <button
                  className="px-7 py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  onClick={() => navigate.push("/dashboard")}
                >
                  Go to Dashboard →
                </button>
              ) : (
                <button
                  className="px-7 py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 cursor-pointer"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? "Redirecting..." : "Get Started →"}
                </button>
              )}

              <a
                href="#feature"
                className="px-7 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-200 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="text-black dark:text-white">✓</span>
                Easy Integration
              </span>
              <span className="flex items-center gap-2">
                <span className="text-black dark:text-white">✓</span>
                Business-Specific Answers
              </span>
            </div>
          </motion.div>

          {/* Right Chatbot Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-700/30 blur-3xl rounded-full scale-75" />

            <div className="relative rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="w-5 h-5"
                    >
                      <path d="M7 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5l-4 3v-3Z" />
                      <path d="M8 9h8M8 13h5" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-semibold text-sm">QueryDesk Assistant</p>
                    <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      Online now
                    </p>
                  </div>
                </div>

                <span className="text-xs text-zinc-400">AI Chat</span>
              </div>

              {/* Chat Messages */}
              <div className="p-5 space-y-5 bg-zinc-50/70 dark:bg-zinc-950 min-h-70">
                <div className="text-center">
                  <span className="text-xs text-zinc-400 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1 rounded-full">
                    Today
                  </span>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <p className="text-xs text-zinc-400 mb-1">Assistant</p>
                    <p className="text-sm text-zinc-700">
                      Hi! Welcome to our store. How can I help you today?
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-black text-white rounded-2xl rounded-tr-sm px-4 py-3">
                    <p className="text-sm">Do you offer Cash on Delivery?</p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <p className="text-xs text-zinc-400 mb-1">Assistant</p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-200">
                      Yes! Cash on Delivery is available. Would you like help
                      placing your order?
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Chat Input Preview */}
              <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200 dark:border-zinc-700 px-4 py-3">
                  <span className="text-sm text-zinc-400">
                    Ask me anything...
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
                    ↑
                  </div>
                </div>
                <p className="text-center text-[10px] text-zinc-400 mt-3">
                  Powered by QueryDesk AI
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-5 -right-3 md:-right-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl rounded-xl px-4 py-3"
            >
              <p className="text-xs text-zinc-400">Support availability</p>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white mt-1">
                24/7 AI Assistance
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* feature section */}
      <section
        id="features"
        className="bg-zinc-50 dark:bg-zinc-950 py-28 px-6 border-t border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-full px-4 py-2 mb-5">
              Powerful Features
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Everything You Need for
              <span className="text-zinc-400 dark:text-zinc-500">
                {" "}
                Smarter Support.
              </span>
            </h2>

            <p className="mt-5 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
              Simplify customer conversations, manage your business knowledge,
              and deliver better support experiences with QueryDesk.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
            {[
              {
                icon: "✦",
                title: "AI-Powered Responses",
                desc: "Give customers quick and relevant answers using your own business knowledge.",
                tag: "AI & Automation",
              },
              {
                icon: "▤",
                title: "Custom Knowledge Base",
                desc: "Add and manage your business information so your AI assistant understands your services.",
                tag: "Knowledge Management",
              },
              {
                icon: "◉",
                title: "Real-Time Chat Support",
                desc: "Help website visitors get answers to their questions through an interactive chat experience.",
                tag: "Live Communication",
              },
              {
                icon: "</>",
                title: "Easy Website Integration",
                desc: "Connect your chatbot to your website using a simple embed script.",
                tag: "Developer Friendly",
              },
              {
                icon: "◇",
                title: "Secure Authentication",
                desc: "Protect business accounts with secure login and session management.",
                tag: "Authentication & Security",
              },
              {
                icon: "▦",
                title: "Multi-Tenant Architecture",
                desc: "Keep each business account and its chatbot configuration separate and organized.",
                tag: "SaaS Architecture",
              },
            ].map((f, index) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xl font-semibold text-zinc-900 dark:text-white group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                  {f.icon}
                </div>

                <h3 className="mt-7 text-lg font-semibold text-zinc-900 dark:text-white">
                  {f.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {f.desc}
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    {f.tag}
                  </span>

                  <span className="text-zinc-400 dark:text-zinc-500 text-sm">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-white dark:bg-zinc-950 py-28 px-6 border-t border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 rounded-full px-4 py-2 mb-5">
              Simple Workflow
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Get Started in
              <span className="text-zinc-400 dark:text-zinc-500">
                {" "}
                Four Simple Steps.
              </span>
            </h2>

            <p className="mt-5 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
              From setting up your business to helping customers, QueryDesk
              makes AI-powered support simple.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {[
              {
                number: "01",
                icon: "01",
                title: "Set Up Your Business",
                desc: "Add your business name, support email and essential business information.",
              },
              {
                number: "02",
                icon: "✦",
                title: "Configure Your AI",
                desc: "Provide your knowledge base to help the assistant understand your business.",
              },
              {
                number: "03",
                icon: "</>",
                title: "Integrate Chatbot",
                desc: "Copy your unique embed script and add it to your website.",
              },
              {
                number: "04",
                icon: "↗",
                title: "Support Customers",
                desc: "Let website visitors interact with your chatbot and receive helpful answers.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative group"
              >
                <div className="h-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 hover:bg-white dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-semibold">
                      {step.icon}
                    </div>

                    <span className="text-3xl font-semibold text-zinc-200 dark:text-zinc-700 group-hover:text-zinc-400 dark:group-hover:text-zinc-500 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold text-zinc-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    {step.desc}
                  </p>

                  <div className="mt-7 w-10 h-0.5 bg-zinc-300 dark:bg-zinc-700 group-hover:w-full group-hover:bg-black dark:group-hover:bg-white transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section
        id="live-demo"
        className="bg-zinc-50 dark:bg-zinc-950 py-28 px-6 border-t border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-full px-4 py-2 mb-5">
              Interactive Experience
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Meet Your
              <span className="text-zinc-400 dark:text-zinc-500">
                {" "}
                AI Assistant.
              </span>
            </h2>

            <p className="mt-5 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
              Experience how QueryDesk can interact with customers. Ask a
              question and explore the chatbot experience.
            </p>
          </motion.div>

          {/* Chat Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto mt-14"
          >
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-black text-white rounded-xl flex items-center justify-center text-xl">
                    ✦
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">
                      QueryDesk Assistant
                    </h3>
                    <p className="text-xs text-green-600 mt-1">
                      ● Demo Assistant
                    </p>
                  </div>
                </div>

                <span className="text-xs text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700 rounded-full px-3 py-1">
                  Live Preview
                </span>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-5 space-y-4 bg-zinc-50 dark:bg-zinc-950">
                {demoMessages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                        message.role === "user"
                          ? "bg-black dark:bg-white text-white dark:text-black rounded-tr-sm"
                          : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-tl-sm shadow-sm"
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Suggested Questions */}
              <div className="px-5 pt-5 bg-white dark:bg-zinc-900">
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-3">
                  TRY ASKING
                </p>

                <div className="flex flex-wrap gap-2">
                  {demoQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleDemoSend(question)}
                      className="text-xs px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all duration-200 cursor-pointer"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleDemoSend();
                }}
                className="p-5 bg-white dark:bg-zinc-900"
              >
                <div className="flex items-center gap-3 border border-zinc-300 dark:border-zinc-700 rounded-xl p-2 focus-within:border-black dark:focus-within:border-white transition-colors">
                  <input
                    type="text"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 min-w-0 px-3 py-2 text-sm outline-none bg-transparent text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                  />

                  <button
                    type="submit"
                    disabled={!demoInput.trim()}
                    className="w-10 h-10 shrink-0 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-40 transition cursor-pointer"
                    aria-label="Send message"
                  >
                    ↑
                  </button>
                </div>

                <p className="text-center text-[10px] text-zinc-400 dark:text-zinc-500 mt-3">
                  Interactive product preview • Experience QueryDesk in action
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Query<span className="text-zinc-500">Desk.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400 max-w-sm">
                Smarter conversations. Better customer experiences. Let AI
                handle your customer support while you focus on growing your
                business.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-3 mt-7 cursor-pointer">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-zinc-900 dark:hover:border-white transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-zinc-900 dark:hover:border-white transition-all duration-300"
                >
                  <FaLinkedinIn size={17} />
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-zinc-900 dark:hover:border-white transition-all duration-300"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  aria-label="Email"
                  className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-zinc-900 dark:hover:border-white transition-all duration-300"
                >
                  <FaEnvelope size={17} />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold mb-6 text-zinc-900 dark:text-white">
                Product
              </h3>

              <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                {[
                  { name: "Features", link: "#features" },
                  { name: "Dashboard", link: "/dashboard" },
                  { name: "AI Chatbot", link: "#live-demo" },
                  { name: "Integration", link: "#how-it-works" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="hover:text-black dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold mb-6 text-zinc-900 dark:text-white">
                Company
              </h3>
              <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                {[
                  "About Us",
                  "Contact",
                  "Privacy Policy",
                  "Terms & Conditions",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-black dark:hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-500 dark:text-zinc-500">
              © {new Date().getFullYear()} QueryDesk. All rights reserved.
            </p>

            <p className="text-xs text-zinc-500 dark:text-zinc-500">
              Built with care for better conversations.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeClient;
