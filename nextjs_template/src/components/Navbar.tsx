'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Our Work', href: '#portfolio' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-bg-card/90 backdrop-blur-lg border-b border-border-subtle py-3 shadow-sm'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-7xl flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 text-2xl font-bold font-heading text-text-main group">
                    <svg className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                    Nexus
                </a>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-text-muted hover:text-primary font-medium transition-colors">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <a href="#contact" className="btn btn-primary">
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-text-main p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-bg-card z-50 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <button
                    className="absolute top-6 right-6 text-text-main p-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <ul className="flex flex-col gap-6 text-center">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-3xl font-bold text-text-main hover:text-primary font-heading"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
