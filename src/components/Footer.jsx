import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="relative z-10 py-16 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h3 className="text-3xl font-clash font-bold tracking-tighter text-text-main">
                            TARTOR <span className="text-accent-blue">GAADI.</span>
                        </h3>
                        <p className="text-sm text-text-dim font-medium">© {new Date().getFullYear()} All rights reserved. Crafting with excellence.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        {[
                            { icon: FiGithub, href: "https://github.com/tartor0" },
                            { icon: FiLinkedin, href: "#" },
                            { icon: FiTwitter, href: "#" },
                            { icon: FiMail, href: "mailto:gaaditartor160@gmail.com" },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="w-12 h-12 flex items-center justify-center rounded-xl border border-border text-text-dim hover:text-accent-blue hover:border-accent-blue transition-all"
                            >
                                <social.icon size={22} />
                            </a>
                        ))}
                    </div>

                    <p className="text-[10px] text-text-dim font-clash font-bold tracking-[0.3em] uppercase opacity-60">
                        Built with Tartor's Design System
                    </p>
                </div>
            </div>
        </footer>
    );
}