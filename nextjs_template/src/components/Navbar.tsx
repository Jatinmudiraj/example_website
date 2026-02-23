'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20); // trigger sooner for polish
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Platform', href: '#home' },
        { name: 'Solutions', href: '#about' },
        { name: 'Architecture', href: '#services' },
        { name: 'Customers', href: '#portfolio' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled
                    ? 'bg-[#060913]/70 backdrop-blur-2xl border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-7xl flex justify-between items-center">
                {/* Deep Glow Logo */}
                <a href="#" className="flex items-center gap-3 text-2xl font-bold font-heading text-white group relative">
                    <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <svg className="w-8 h-8 text-primary relative z-10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span className="relative z-10 tracking-widest uppercase text-lg">Nexus</span>
                </a>

                {/* High-End Desktop Links (Animated Underline) */}
                <ul className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-white/70 hover:text-white font-medium text-sm tracking-wider uppercase transition-colors relative group py-2">
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_10px_rgba(0,242,254,0.8)]"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <a href="#" className="text-white hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest hidden xl:block">Sign In</a>
                    <a href="#contact" className="btn bg-white text-black py-2 px-6 rounded-full hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all uppercase text-xs tracking-widest font-bold">
                        Deploy Now
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white p-2 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-[2px] w-full bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
                        <span className={`block h-[2px] w-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-[2px] w-full bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Extreme Glass Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#060913]/95 backdrop-blur-3xl z-[-1] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

                <ul className="flex flex-col gap-8 text-center relative z-10 w-full px-6">
                    {navLinks.map((link, index) => (
                        <li key={link.name} style={{ transitionDelay: `${index * 50}ms` }} className={`transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <a
                                href={link.href}
                                className="text-4xl md:text-5xl font-bold text-white hover:text-primary font-heading tracking-widest uppercase transition-colors block py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className={`mt-8 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'}`}>
                        <a href="#contact" className="btn btn-primary w-full max-w-xs mx-auto text-center justify-center py-4 text-lg">Deploy Now</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
