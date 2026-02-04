import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-navy/50 py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <span className="text-xl font-bold tracking-tight text-white">7-SENSE</span>
                        <p className="text-white/50 text-sm max-w-xs">
                            Intelligent marine operations and integrated technology solutions for the modern maritime industry.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Solution</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-white/50 hover:text-brand-cyan text-sm transition-colors">PicSea Engine</Link></li>
                            <li><Link href="#" className="text-white/50 hover:text-brand-cyan text-sm transition-colors">Digital Twin</Link></li>
                            <li><Link href="#" className="text-white/50 hover:text-brand-cyan text-sm transition-colors">SupplyLink</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-white/50 hover:text-brand-cyan text-sm transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-white/50 hover:text-brand-cyan text-sm transition-colors">Vision</Link></li>
                            <li><Link href="#" className="text-white/50 hover:text-brand-cyan text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Social</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="text-white/50 hover:text-brand-cyan transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/50 hover:text-brand-cyan transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/50 hover:text-brand-cyan transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs">
                        © 2026 MySealium Holdings. All rights reserved. 7Sense is a registered trademark.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-white/30 hover:text-white text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-white/30 hover:text-white text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
