"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera, Package, FileText, Anchor,
  ArrowRight, CheckCircle, Zap, Search,
  ClipboardCheck, Truck, ShieldCheck, Timer,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Ambient grid */}
      <div className="fixed inset-0 grid-bg opacity-15 pointer-events-none" />

      {/* Ambient glows */}
      <div
        className="fixed top-[-15%] left-[-10%] w-[45%] h-[45%] rounded-full pointer-events-none"
        style={{ background: "rgba(0, 240, 255, 0.03)", filter: "blur(120px)" }}
      />
      <div
        className="fixed bottom-[-10%] right-[-15%] w-[40%] h-[40%] rounded-full pointer-events-none"
        style={{ background: "rgba(0, 43, 69, 0.15)", filter: "blur(100px)" }}
      />

      <Navbar />

      {/* ================================================================ */}
      {/* HERO SECTION */}
      {/* ================================================================ */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 px-4">
        {/* Floating particles */}
        {[
          { left: "12%", delay: "0s", dur: "6s" },
          { left: "45%", delay: "2s", dur: "7s" },
          { left: "78%", delay: "1s", dur: "5.5s" },
          { left: "30%", delay: "3.5s", dur: "8s" },
          { left: "88%", delay: "0.5s", dur: "6.5s" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute bottom-20 pointer-events-none"
            style={{
              left: p.left,
              width: i % 2 === 0 ? "3px" : "2px",
              height: i % 2 === 0 ? "3px" : "2px",
              borderRadius: "50%",
              background: "rgba(0, 240, 255, 0.5)",
              animation: `particle-drift ${p.dur} ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo + Sonar Animation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="relative w-20 h-20 mb-6">
              {/* Sonar rings */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid rgba(0, 240, 255, 0.12)",
                  animation: "sonar-ring 3.5s ease-out infinite",
                }}
              />
              <div
                className="absolute inset-1 rounded-full"
                style={{
                  border: "1px solid rgba(0, 240, 255, 0.08)",
                  animation: "sonar-ring 3.5s ease-out infinite 1.2s",
                }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: "0 0 20px rgba(0, 240, 255, 0.4), 0 0 40px rgba(0, 240, 255, 0.15)",
                }}
              />
              <Image
                src="/logo-primary-circle.jpg"
                alt="7-SENSE Marine"
                width={80}
                height={80}
                className="rounded-full object-cover relative z-10"
                priority
              />
            </div>
            <span
              className="text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full"
              style={{
                color: "#00F0FF",
                background: "rgba(0, 240, 255, 0.06)",
                border: "1px solid rgba(0, 240, 255, 0.15)",
                fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              }}
            >
              Your Shop&apos;s Operations Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]"
            style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
          >
            <span className="text-white">We Handle the Parts.</span>
            <br />
            <span className="text-gradient glow-text">You Fix the Boats.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Field-tested tools for marine professionals. Snap a photo, identify the right parts,
            build your order — backed by 29,000+ verified marine records.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-black flex items-center justify-center gap-2 transition-all duration-200 group hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
              style={{
                background: "#00F0FF",
                color: "#000C18",
                fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              }}
            >
              Get a Demo Account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 text-center hover:border-[rgba(0,240,255,0.25)] hover:text-[#00F0FF]"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              See How It Works
            </a>
          </motion.div>

          {/* Social proof metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          >
            {[
              { value: "29,000+", label: "Marine parts indexed" },
              { value: "4 min", label: "Avg. search-to-order" },
              { value: "12V/24V", label: "Cross-checked compatibility" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-xl md:text-2xl font-black"
                  style={{ color: "#00F0FF", fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CAPABILITIES SECTION */}
      {/* ================================================================ */}
      <section id="capabilities" className="py-20 md:py-28 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-6"
              style={{
                color: "#00F0FF",
                background: "rgba(0, 240, 255, 0.06)",
                border: "1px solid rgba(0, 240, 255, 0.15)",
                fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              }}
            >
              What We Build
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-4 text-white"
              style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
            >
              Built for the Dock,{" "}
              <span className="text-gradient">Not the Boardroom</span>
            </motion.h2>
            <p className="max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
              Purpose-built tools for marine professionals. Reliable data under pressure —
              not generic software with a boat icon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <Camera className="w-5 h-5" />,
                title: "Fast Parts ID",
                desc: "Snap a photo, get matched parts from 29,000+ marine records. Manufacturer, part number, pricing, and stock — in seconds, not hours.",
                tag: "Live",
              },
              {
                icon: <ClipboardCheck className="w-5 h-5" />,
                title: "Reliable Job Planning",
                desc: "Auto-built bills of materials with cross-checked fits. Your BOM assembles itself as you photograph the job — you verify, not create.",
                tag: "Live",
              },
              {
                icon: <Truck className="w-5 h-5" />,
                title: "Trusted Ordering",
                desc: "Pick vendors, compare pricing, generate purchase orders — backed by real boat data and verified compatibility. No guesswork.",
                tag: "Live",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl transition-all duration-300 group cursor-default relative overflow-hidden hover:border-[rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.05)]"
                style={{
                  background: "rgba(0, 26, 46, 0.4)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(0, 240, 255, 0.08) 0%, transparent 70%)",
                  }}
                />

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(0, 240, 255, 0.08)",
                      border: "1px solid rgba(0, 240, 255, 0.15)",
                      color: "#00F0FF",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <span
                    className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(52, 211, 153, 0.1)",
                      color: "#34D399",
                      border: "1px solid rgba(52, 211, 153, 0.2)",
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    }}
                  >
                    {feature.tag}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS — 3-Step Flow */}
      {/* ================================================================ */}
      <section id="how-it-works" className="py-20 md:py-28 px-4 relative">
        {/* Sonar bg */}
        <div className="absolute inset-0 sonar-bg opacity-20 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-6"
              style={{
                color: "#00F0FF",
                background: "rgba(0, 240, 255, 0.06)",
                border: "1px solid rgba(0, 240, 255, 0.15)",
                fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              }}
            >
              How It Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-4 text-white"
              style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
            >
              Three Steps.{" "}
              <span className="text-gradient">Zero Guesswork.</span>
            </motion.h2>
            <p className="max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
              Your photos are matched against 29,000+ verified marine parts.
              Cross-checked for fit. Priced from multiple vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: <Camera className="w-6 h-6" />,
                title: "Snap",
                desc: "Photograph the part, the panel, or the whole system. Your phone captures everything the system needs — no forms, no data entry.",
                accent: "#00F0FF",
              },
              {
                step: "02",
                icon: <ClipboardCheck className="w-6 h-6" />,
                title: "Verify",
                desc: "Review the matched parts list with pricing and availability. Confirm what's right, tap to fix what isn't. Your BOM builds itself.",
                accent: "#4DFAFF",
              },
              {
                step: "03",
                icon: <Zap className="w-6 h-6" />,
                title: "Order",
                desc: "Pick your vendors, generate the purchase order, and get back to work. Parts arrive, job gets done, records are kept.",
                accent: "#34D399",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-6 rounded-2xl text-center"
                style={{
                  background: "rgba(0, 18, 34, 0.5)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Step number */}
                <span
                  className="text-[80px] font-black leading-none absolute top-2 right-4 pointer-events-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(0, 240, 255, 0.06)",
                    fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                  }}
                >
                  {item.step}
                </span>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10"
                  style={{
                    background: `rgba(${item.accent === "#34D399" ? "52, 211, 153" : "0, 240, 255"}, 0.08)`,
                    border: `1px solid ${item.accent}25`,
                    color: item.accent,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="text-xl font-black mb-3 text-white relative z-10"
                  style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed relative z-10"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PICSEA SECTION */}
      {/* ================================================================ */}
      <section
        id="picsea"
        className="py-20 md:py-28 px-4 relative"
        style={{ background: "rgba(0, 26, 46, 0.2)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-6"
                style={{
                  color: "#34D399",
                  background: "rgba(52, 211, 153, 0.08)",
                  border: "1px solid rgba(52, 211, 153, 0.2)",
                  fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                }}
              >
                Now Available
              </span>
              <h2
                className="text-3xl md:text-5xl font-black mb-2 leading-tight text-white"
                style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
              >
                PicSea
              </h2>
              <p
                className="text-xl md:text-2xl font-bold mb-6"
                style={{ color: "rgba(0, 240, 255, 0.7)", fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
              >
                Your Dockside Parts Partner
              </p>
              <p
                className="text-base mb-8 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Snap a photo of any marine part or system. Get instant identification,
                dealer pricing, stock levels, and compatibility checks. Build a complete
                bill of materials and generate a purchase order — all from your phone,
                right there on the dock. Cuts ordering time with accurate data from real
                marine jobs.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Camera className="w-4 h-4" />, label: "Photo → Part ID" },
                  { icon: <Package className="w-4 h-4" />, label: "Multi-vendor pricing" },
                  { icon: <FileText className="w-4 h-4" />, label: "Auto-built BOMs" },
                  { icon: <Anchor className="w-4 h-4" />, label: "Vessel-aware matching" },
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(0, 240, 255, 0.06)",
                        border: "1px solid rgba(0, 240, 255, 0.12)",
                        color: "#00F0FF",
                      }}
                    >
                      {feat.icon}
                    </div>
                    <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-[0_0_24px_rgba(0,240,255,0.4)]"
                style={{
                  background: "#00F0FF",
                  color: "#000C18",
                  fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                }}
              >
                Get a Demo Account
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Right: visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="aspect-square rounded-full flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "rgba(0, 26, 46, 0.4)",
                  border: "1px solid rgba(0, 240, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="absolute inset-0 grid-bg opacity-10 rounded-full" />
                {/* Animated rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25 + ring * 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute border rounded-full"
                    style={{
                      width: `${55 + ring * 15}%`,
                      height: `${55 + ring * 15}%`,
                      borderColor: "rgba(0, 240, 255, 0.05)",
                    }}
                  />
                ))}
                {/* Center */}
                <div className="relative z-10 text-center">
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{
                      background: "rgba(0, 240, 255, 0.08)",
                      border: "1px solid rgba(0, 240, 255, 0.2)",
                      boxShadow: "0 0 30px rgba(0, 240, 255, 0.15)",
                    }}
                  >
                    <Camera className="w-10 h-10" style={{ color: "#00F0FF" }} />
                  </div>
                  <span
                    className="text-xs font-black tracking-[0.2em] uppercase"
                    style={{
                      color: "rgba(0, 240, 255, 0.6)",
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    }}
                  >
                    Snap → Verify → Order
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CONTACT — CRM Form */}
      {/* ================================================================ */}
      <ContactSection />

      {/* ================================================================ */}
      {/* FOOTER */}
      {/* ================================================================ */}
      <Footer />
    </main>
  );
}
