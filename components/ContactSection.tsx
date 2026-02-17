"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, CheckCircle, User, Mail, MessageSquare,
  Building2, ChevronDown, Anchor
} from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    project: "Consulting",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Capture UTM source for lead attribution
      const params = new URLSearchParams(window.location.search);
      const source = params.get("utm_source") || params.get("ref") || "Website";

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, source }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 relative">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
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
            Talk to Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4 text-white"
            style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
          >
            Let&apos;s <span className="text-gradient">Build Something</span>
          </motion.h2>
          <p style={{ color: "rgba(255,255,255,0.45)" }}>
            Whether you run a shop, build marine hardware, or operate a fleet — tell us
            what you&apos;re working on. We&apos;ll tell you how we can help.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 md:p-10 relative overflow-hidden"
          style={{
            background: "rgba(0, 18, 34, 0.7)",
            border: "1px solid rgba(0, 240, 255, 0.1)",
            backdropFilter: "blur(20px)",
            boxShadow:
              "0 0 40px rgba(0, 240, 255, 0.04), 0 20px 60px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Corner brackets */}
          {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r", "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map(
            (classes, i) => (
              <div
                key={i}
                className={`absolute ${classes} w-5 h-5 pointer-events-none`}
                style={{ borderColor: "rgba(0, 240, 255, 0.15)" }}
              />
            )
          )}

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "rgba(52, 211, 153, 0.1)",
                    border: "1px solid rgba(52, 211, 153, 0.25)",
                    boxShadow: "0 0 20px rgba(52, 211, 153, 0.15)",
                  }}
                >
                  <CheckCircle className="w-10 h-10" style={{ color: "#34D399" }} />
                </div>
                <h3
                  className="text-2xl font-black mb-2 text-white"
                  style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                >
                  Message Received
                </h3>
                <p className="mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  We&apos;ll get back to you within 24 hours. You can also reach out at{" "}
                  <a
                    href="mailto:jannas@7sense.net"
                    style={{ color: "#00F0FF" }}
                  >
                    jannas@7sense.net
                  </a>
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      email: "",
                      organization: "",
                      project: "Consulting",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {/* Name */}
                <div>
                  <label
                    className="text-[10px] uppercase tracking-[0.15em] font-bold block mb-2 flex items-center gap-1.5"
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    }}
                  >
                    <User className="w-3 h-3" /> Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="text-[10px] uppercase tracking-[0.15em] font-bold block mb-2 flex items-center gap-1.5"
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    }}
                  >
                    <Mail className="w-3 h-3" /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@yourshop.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label
                    className="text-[10px] uppercase tracking-[0.15em] font-bold block mb-2 flex items-center gap-1.5"
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    }}
                  >
                    <Building2 className="w-3 h-3" /> Organization
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Portland Marine Electric"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    className="text-[10px] uppercase tracking-[0.15em] font-bold block mb-2 flex items-center gap-1.5"
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    }}
                  >
                    <Anchor className="w-3 h-3" /> Interest Area
                  </label>
                  <div className="relative">
                    <select
                      value={formData.project}
                      onChange={(e) =>
                        setFormData({ ...formData, project: e.target.value })
                      }
                      className="form-input appearance-none pr-10"
                    >
                      <option value="Consulting" style={{ background: "#001A2E" }}>
                        Consulting
                      </option>
                      <option value="PicSea Demo" style={{ background: "#001A2E" }}>
                        PicSea Demo
                      </option>
                      <option value="Fleet Operations" style={{ background: "#001A2E" }}>
                        Fleet Operations
                      </option>
                      <option value="Custom Integration" style={{ background: "#001A2E" }}>
                        Custom Integration
                      </option>
                      <option value="Partnership" style={{ background: "#001A2E" }}>
                        Partnership
                      </option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label
                    className="text-[10px] uppercase tracking-[0.15em] font-bold block mb-2 flex items-center gap-1.5"
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    }}
                  >
                    <MessageSquare className="w-3 h-3" /> Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your operation and what you're looking for..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-xl font-black text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                    style={{
                      background: "#00F0FF",
                      color: "#000C18",
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    }}
                  >
                    {status === "submitting" ? (
                      <span
                        className="w-5 h-5 border-2 border-transparent rounded-full animate-spin"
                        style={{ borderTopColor: "#000C18", borderRightColor: "rgba(0, 12, 24, 0.3)" }}
                      />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
