"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Anchor, ArrowRight, Radio, Eye, Cpu, Wrench,
  Ship, Building2, Network, Camera, Shield,
  BarChart3, Zap, Globe, CheckCircle,
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
      {/* HERO */}
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
          {/* Logo + Sonar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="relative w-20 h-20 mb-6">
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
              Marine Technology
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
            <span className="text-gradient glow-text">Sense. Navigate. Act.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            We build technology for the marine industry. Data systems, field tools, and
            operational intelligence — designed for people who work on the water.
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
              Talk to Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#capabilities"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 text-center hover:border-[rgba(0,240,255,0.25)] hover:text-[#00F0FF]"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              What We Do
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CAPABILITIES — 4 Pillars */}
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
              What We Do
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
            <p className="max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
              Every tool we build solves a problem we&apos;ve seen firsthand. 10 years in marine
              operations taught us what works under pressure — and what doesn&apos;t.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: <Eye className="w-5 h-5" />,
                title: "Marine Data Intelligence",
                desc: "29,000+ indexed marine parts. Verified compatibility data. Manufacturer specs cross-checked against real-world installs. The dataset that powers everything else.",
                tag: "Core",
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                title: "Field Operations Tools",
                desc: "Purpose-built software for technicians and shops. Parts identification, job planning, bill of materials, purchase orders — from your phone, on the dock.",
                tag: "Live",
              },
              {
                icon: <Network className="w-5 h-5" />,
                title: "Systems Integration",
                desc: "We connect marine hardware, sensors, and data sources into a single operational picture. Your equipment talks to each other — and tells you what matters.",
                tag: "Services",
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                title: "Action Modeling",
                desc: "Operational intelligence that turns raw marine data into decisions. Predictive maintenance, anomaly detection, pattern recognition — models built for how boats actually work.",
                tag: "Services",
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
                      background: feature.tag === "Live"
                        ? "rgba(52, 211, 153, 0.1)"
                        : "rgba(0, 240, 255, 0.06)",
                      color: feature.tag === "Live" ? "#34D399" : "#00F0FF",
                      border: feature.tag === "Live"
                        ? "1px solid rgba(52, 211, 153, 0.2)"
                        : "1px solid rgba(0, 240, 255, 0.15)",
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
      {/* WHO WE SERVE */}
      {/* ================================================================ */}
      <section id="who-we-serve" className="py-20 md:py-28 px-4 relative">
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
              Who We Serve
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-4 text-white"
              style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
            >
              Marine Professionals.{" "}
              <span className="text-gradient">Full Stop.</span>
            </motion.h2>
            <p className="max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
              We work exclusively with people who make their living on the water.
              If you build, maintain, or operate vessels — we build for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "Boatyards & Marine Shops",
                desc: "Service technicians, electricians, and shop managers. We help you find the right parts, plan jobs faster, and keep accurate records without the paperwork.",
                examples: "Parts ID · Job planning · Purchase orders · Service records",
              },
              {
                icon: <Radio className="w-6 h-6" />,
                title: "Marine OEMs & Hardware",
                desc: "Manufacturers and distributors of marine electronics, sensors, and systems. We integrate your hardware into operational workflows and extend its value.",
                examples: "Data integration · Action modeling · Field deployment",
              },
              {
                icon: <Ship className="w-6 h-6" />,
                title: "Fleet & Vessel Operators",
                desc: "Commercial operators, yacht managers, and charter companies. We connect your onboard systems into a single operational picture across your fleet.",
                examples: "Fleet intelligence · Maintenance tracking · System monitoring",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 rounded-2xl relative overflow-hidden group hover:border-[rgba(0,240,255,0.2)] transition-all duration-300"
                style={{
                  background: "rgba(0, 18, 34, 0.5)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(0, 240, 255, 0.08)",
                    border: "1px solid rgba(0, 240, 255, 0.15)",
                    color: "#00F0FF",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="text-lg font-black mb-3 text-white"
                  style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {item.desc}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "rgba(0, 240, 255, 0.5)" }}
                >
                  {item.examples}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PRODUCTS — PicSea + Future */}
      {/* ================================================================ */}
      <section
        id="products"
        className="py-20 md:py-28 px-4 relative"
        style={{ background: "rgba(0, 26, 46, 0.2)" }}
      >
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
              Products
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-4 text-white"
              style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
            >
              Tools That{" "}
              <span className="text-gradient">Ship</span>
            </motion.h2>
          </div>

          {/* PicSea Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden mb-6"
            style={{
              background: "rgba(0, 18, 34, 0.6)",
              border: "1px solid rgba(0, 240, 255, 0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, rgba(0, 240, 255, 0.06) 0%, transparent 70%)",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(52, 211, 153, 0.1)",
                      color: "#34D399",
                      border: "1px solid rgba(52, 211, 153, 0.2)",
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    }}
                  >
                    Live
                  </span>
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black mb-2 text-white"
                  style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                >
                  PicSea
                </h3>
                <p
                  className="text-lg font-bold mb-4"
                  style={{ color: "rgba(0, 240, 255, 0.7)", fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                >
                  Photo-to-Part. Dock to Order.
                </p>
                <p
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Snap a photo of any marine part or system. Get instant identification,
                  dealer pricing, stock levels, and compatibility checks — all backed by
                  29,000+ verified marine records. Build a complete bill of materials and
                  generate purchase orders from your phone.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: <Camera className="w-3.5 h-3.5" />, label: "Photo → Part ID" },
                    { icon: <BarChart3 className="w-3.5 h-3.5" />, label: "Multi-vendor pricing" },
                    { icon: <Shield className="w-3.5 h-3.5" />, label: "Cross-checked fits" },
                    { icon: <Anchor className="w-3.5 h-3.5" />, label: "Vessel-aware matching" },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(0, 240, 255, 0.06)",
                          border: "1px solid rgba(0, 240, 255, 0.12)",
                          color: "#00F0FF",
                        }}
                      >
                        {feat.icon}
                      </div>
                      <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {feat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://picsea.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-[0_0_24px_rgba(0,240,255,0.4)]"
                  style={{
                    background: "#00F0FF",
                    color: "#000C18",
                    fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                  }}
                >
                  Try PicSea
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right visual */}
              <div className="hidden lg:flex items-center justify-center">
                <div
                  className="w-64 h-64 rounded-full flex items-center justify-center relative"
                  style={{
                    background: "rgba(0, 26, 46, 0.4)",
                    border: "1px solid rgba(0, 240, 255, 0.08)",
                  }}
                >
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
                  <div className="relative z-10 text-center">
                    <div
                      className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{
                        background: "rgba(0, 240, 255, 0.08)",
                        border: "1px solid rgba(0, 240, 255, 0.2)",
                        boxShadow: "0 0 30px rgba(0, 240, 255, 0.15)",
                      }}
                    >
                      <Camera className="w-8 h-8" style={{ color: "#00F0FF" }} />
                    </div>
                    <span
                      className="text-[10px] font-black tracking-[0.2em] uppercase"
                      style={{
                        color: "rgba(0, 240, 255, 0.6)",
                        fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                      }}
                    >
                      Snap → ID → Order
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Future products hint */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: <Network className="w-5 h-5" />,
                title: "Custom Integrations",
                desc: "We build bespoke data pipelines and operational tools for marine businesses. Your hardware, your workflows, your data — connected and working together.",
                cta: "Talk to Us",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "Partnership Programs",
                desc: "We work with marine hardware manufacturers, distributors, and service networks to extend the value of existing products through data and intelligence.",
                cta: "Explore Partnerships",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl transition-all duration-300 group hover:border-[rgba(0,240,255,0.2)]"
                style={{
                  background: "rgba(0, 18, 34, 0.4)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(0, 240, 255, 0.08)",
                    border: "1px solid rgba(0, 240, 255, 0.15)",
                    color: "#00F0FF",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {item.desc}
                </p>
                <a
                  href="#contact"
                  className="text-xs font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  style={{ color: "#00F0FF" }}
                >
                  {item.cta}
                  <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHY 7-SENSE */}
      {/* ================================================================ */}
      <section className="py-20 md:py-28 px-4 relative">
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
              Why 7-SENSE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-4 text-white"
              style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
            >
              We Know the{" "}
              <span className="text-gradient">Industry</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                icon: <Anchor className="w-5 h-5" />,
                value: "10+",
                label: "Years in marine operations",
              },
              {
                icon: <BarChart3 className="w-5 h-5" />,
                value: "29K+",
                label: "Marine parts indexed",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                value: "12V/24V",
                label: "Systems cross-checked",
              },
              {
                icon: <CheckCircle className="w-5 h-5" />,
                value: "ABYC",
                label: "Standards aligned",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 rounded-2xl"
                style={{
                  background: "rgba(0, 18, 34, 0.4)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "rgba(0, 240, 255, 0.08)",
                    border: "1px solid rgba(0, 240, 255, 0.15)",
                    color: "#00F0FF",
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-2xl font-black mb-1"
                  style={{ color: "#00F0FF", fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CONTACT */}
      {/* ================================================================ */}
      <ContactSection />

      {/* ================================================================ */}
      {/* FOOTER */}
      {/* ================================================================ */}
      <Footer />
    </main>
  );
}
