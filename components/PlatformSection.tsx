"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Shield, Zap, Database } from "lucide-react";

export function PlatformSection() {
    return (
        <section id="platform" className="py-24 px-4 bg-brand-navy/30 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-brand-seafoam/10 border border-brand-seafoam/20 text-brand-seafoam text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            The Platform
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Your Data Has<br /><span className="text-gradient">Untapped Value</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-12 leading-relaxed">
                            Vessels generate mountains of data. Most of it sits unused. We build tailored workflows that extract specific, actionable insights and route them to the person responsible for execution—not a dashboard, but a completed task.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: <Shield className="w-5 h-5 text-brand-seafoam" />,
                                    title: "Precision Targeting",
                                    desc: "Information tailored to each use case. No noise, no irrelevant alerts—just what's needed to take action."
                                },
                                {
                                    icon: <Zap className="w-5 h-5 text-brand-seafoam" />,
                                    title: "Human-in-Loop Execution",
                                    desc: "AI handles the complexity. Humans own the decisions. Every task has a responsible party."
                                },
                                {
                                    icon: <Activity className="w-5 h-5 text-brand-seafoam" />,
                                    title: "Complete Workflows",
                                    desc: "From data ingestion to task completion—end-to-end pipelines that improve systems over time."
                                },
                                {
                                    icon: <Database className="w-5 h-5 text-brand-seafoam" />,
                                    title: "Proven Accountability",
                                    desc: "Full audit trails. See who did what, when, and verify outcomes across your entire operation."
                                }
                            ].map((item, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-white">{item.title}</h4>
                                    <p className="text-white/40 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-square glass-card rounded-full border border-white/5 flex items-center justify-center relative shadow-3xl shadow-brand-cyan/10"
                        >
                            <div className="absolute inset-0 grid-bg opacity-10 rounded-full" />
                            {/* Animated Rings */}
                            {[1, 2, 3].map((ring) => (
                                <motion.div
                                    key={ring}
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        rotate: { duration: 20 + ring * 10, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="absolute border border-white/5 rounded-full"
                                    style={{
                                        width: `${60 + ring * 15}%`,
                                        height: `${60 + ring * 15}%`,
                                    }}
                                />
                            ))}

                            <div className="relative z-10 text-center">
                                <span className="text-brand-cyan font-mono text-4xl font-bold">97%</span>
                                <p className="text-white/30 text-xs font-bold uppercase tracking-widest mt-2">Task Completion Rate</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
