"use client";

import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="relative py-12 px-4"
      style={{
        background: "rgba(0, 6, 12, 0.9)",
        borderTop: "1px solid rgba(0, 240, 255, 0.06)",
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15) 30%, rgba(0, 240, 255, 0.2) 50%, rgba(0, 240, 255, 0.15) 70%, transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo & identity */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-primary-circle.jpg"
              alt="7-SENSE"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <span
                className="text-sm font-black tracking-[0.12em] uppercase text-white block"
                style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
              >
                7-SENSE Marine
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(0, 240, 255, 0.5)" }}>
                Sense. Navigate. Act.
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            <a href="#capabilities" className="hover:text-[#00F0FF] transition-colors duration-200">What We Build</a>
            <a href="#how-it-works" className="hover:text-[#00F0FF] transition-colors duration-200">How It Works</a>
            <a href="#picsea" className="hover:text-[#00F0FF] transition-colors duration-200">PicSea</a>
            <a href="#contact" className="hover:text-[#00F0FF] transition-colors duration-200">Contact</a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-6" style={{ background: "rgba(255,255,255,0.05)" }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span>© {new Date().getFullYear()} 7-Sense Marine LLC · Portland, Maine</span>
          <div className="flex items-center gap-1.5">
            <a href="mailto:jannas@7sense.net" className="hover:text-[#00F0FF] transition-colors duration-200">
              jannas@7sense.net
            </a>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <a href="tel:+19492399124" className="hover:text-[#00F0FF] transition-colors duration-200">
              (949) 239-9124
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
