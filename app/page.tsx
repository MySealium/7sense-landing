"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ship, Cpu, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-seafoam/10 blur-[120px] rounded-full pointer-events-none" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-brand-cyan mb-8 tracking-widest uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            Next-Gen Marine Intelligence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Intelligent Operations<br />
            <span className="text-gradient">For Maritime Industry</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build integrated technology solutions that transform how vessels operate, connect, and scale in the modern maritime landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2 group">
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              Explore Capabilities
            </button>
          </motion.div>

          {/* Data Orb Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mt-20 max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl shadow-brand-cyan/5">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-[-40px] bg-brand-cyan/20 blur-[60px] rounded-full"
                  />
                  <div className="relative w-32 h-32 rounded-full border-2 border-brand-cyan/20 flex items-center justify-center bg-black/40 backdrop-blur-xl">
                    <Image
                      src="/logo.png"
                      alt="7Sense Orb"
                      width={64}
                      height={64}
                      className="opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-white/50 max-w-xl mx-auto">Precision engineering meets digital intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-6 h-6 text-brand-cyan" />,
                title: "Edge Computing",
                desc: "Real-time data processing and autonomous routing for vessel systems."
              },
              {
                icon: <Ship className="w-6 h-6 text-brand-cyan" />,
                title: "Digital Twin",
                desc: "Live synchronized models tracking every component and maintenance cycle."
              },
              {
                icon: <Globe className="w-6 h-6 text-brand-cyan" />,
                title: "Global Supply",
                desc: "Integrated procurement through the SupplyLink verified partner network."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl glass-card hover:border-brand-cyan/30 shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-cyan/50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {feature.desc}
                </p>
                <ul className="space-y-3">
                  {["Verified accuracy", "Low latency", "Scalable"].map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs font-medium text-white/40">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
