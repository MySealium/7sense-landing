"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, User, Mail, MessageSquare, Building2, ChevronDown } from "lucide-react";

export function ContactSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        project: "Vessel Modernization",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
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
        <section id="contact" className="py-24 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        Contact Us
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Start a Project</h2>
                    <p className="text-white/50">Connect with our engineering team to explore bespoke maritime solutions.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-cyan/30">
                                    <CheckCircle2 className="w-10 h-10 text-brand-cyan" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                                <p className="text-white/50 mb-8">Our team will reach out to your organization within 24 hours.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-all"
                                >
                                    Send Another
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                                        <User className="w-3 h-3" /> Full Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="James Mariner"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-cyan/50 focus:bg-white/10 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                                        <Mail className="w-3 h-3" /> Email Address
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="james@fleet.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-cyan/50 focus:bg-white/10 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                                        <Building2 className="w-3 h-3" /> Organization
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Oceanic Logistics"
                                        value={formData.organization}
                                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-cyan/50 focus:bg-white/10 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                                        <ChevronDown className="w-3 h-3" /> Project Type
                                    </label>
                                    <select
                                        value={formData.project}
                                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/50 focus:bg-white/10 transition-all appearance-none"
                                    >
                                        <option className="bg-[#0a0a0f]">Vessel Modernization</option>
                                        <option className="bg-[#0a0a0f]">Infrastructure Integration</option>
                                        <option className="bg-[#0a0a0f]">PicSea Engine Customization</option>
                                        <option className="bg-[#0a0a0f]">Consulting Services</option>
                                    </select>
                                </div>

                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                                        <MessageSquare className="w-3 h-3" /> Message
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Describe your requirements..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-cyan/50 focus:bg-white/10 transition-all resize-none"
                                    />
                                </div>

                                <div className="md:col-span-2 pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full py-4 bg-brand-cyan hover:bg-brand-cyan/80 disabled:opacity-50 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-cyan/10"
                                    >
                                        {status === "submitting" ? (
                                            <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Initialize Contact
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
