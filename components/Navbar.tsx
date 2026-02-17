"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "What We Build", href: "#capabilities" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "PicSea", href: "#picsea" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(0, 10, 20, 0.92)"
          : "rgba(0, 10, 20, 0.6)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: `1px solid ${scrolled ? "rgba(0, 240, 255, 0.1)" : "rgba(255,255,255,0.04)"}`,
        boxShadow: scrolled
          ? "0 1px 0 rgba(0, 240, 255, 0.06), 0 4px 24px rgba(0, 0, 0, 0.4)"
          : "none",
      }}
    >
      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.2) 30%, rgba(0, 240, 255, 0.3) 50%, rgba(0, 240, 255, 0.2) 70%, transparent)",
          opacity: scrolled ? 1 : 0.3,
          transition: "opacity 0.3s",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div
                className="absolute inset-0 rounded-full transition-opacity duration-300"
                style={{
                  boxShadow: "0 0 14px rgba(0, 240, 255, 0.4), 0 0 28px rgba(0, 240, 255, 0.15)",
                  opacity: scrolled ? 0.8 : 0.5,
                }}
              />
              <Image
                src="/logo-primary-circle.jpg"
                alt="7-SENSE"
                width={36}
                height={36}
                className="rounded-full object-cover relative z-10"
                priority
              />
            </div>
            <span
              className="text-base font-black tracking-[0.15em] uppercase text-white"
              style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
            >
              7-SENSE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-[#00F0FF]"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 hover:shadow-[0_0_24px_rgba(0,240,255,0.4)]"
              style={{
                background: "#00F0FF",
                color: "#000C18",
                fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              }}
            >
              Get a Demo
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: mobileOpen ? "#00F0FF" : "rgba(255,255,255,0.5)" }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            background: "rgba(0, 10, 20, 0.97)",
            borderTop: "1px solid rgba(0, 240, 255, 0.08)",
          }}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-xl text-sm font-semibold transition-all"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 rounded-xl text-sm font-bold text-center transition-all"
              style={{
                background: "#00F0FF",
                color: "#000C18",
                fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              }}
            >
              Get a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
