"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                                <Image
                                    src="/logo-new.png"
                                    alt="7Sense Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                                7-SENSE
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#capabilities" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                            Capabilities
                        </Link>
                        <Link href="#platform" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                            Platform
                        </Link>
                        <Link
                            href="#contact"
                            className="px-5 py-2.5 bg-brand-cyan hover:bg-brand-cyan/80 text-black text-sm font-bold rounded-lg transition-all flex items-center gap-2"
                        >
                            Get Started
                            <MoveRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
