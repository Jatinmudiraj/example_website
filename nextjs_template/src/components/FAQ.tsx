'use client';
import { useState } from 'react';

const faqs = [
    {
        question: "How does the theming engine work?",
        answer: "Our theming engine leverages CSS custom properties (variables) defined at the :root level in globals.css. Because Tailwind CSS v4 maps directly to these native variables, updating a single hex code instantly recalculates borders, backgrounds, and drop-shadows across the entire application without requiring a Javascript re-render."
    },
    {
        question: "Is this compatible with the Next.js App Router?",
        answer: "Absolutely. The entire architecture was written from the ground up for Next.js 15, utilizing Server Components by default for maximum performance, and judiciously opting into 'use client' only where interactivity (like this accordion) is strictly necessary."
    },
    {
        question: "Can I use this for multiple client projects?",
        answer: "If you purchase the Pro license, you receive unlimited commercial rights. You can deploy this template for as many clients as you wish, modifying it to suit their specific brand guidelines without attribution."
    },
    {
        question: "Does it support Dark Mode?",
        answer: "The framework defaults to a highly polished, 'Modern Oceanic' dark mode. However, by simply inverting the var(--bg-main) and var(--text-main) variables in globals.css, you can instantly generate a pristine Light Mode variant."
    },
    {
        question: "What animation library is used?",
        answer: "We prioritized performance by avoiding heavy Javascript animation libraries like Framer Motion. 100% of the micro-animations, hovers, and parallax glows are powered by pure, hardware-accelerated CSS."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first open

    return (
        <section className="section-padding bg-[#060913] relative border-t border-white/5">
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none z-0"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
                <div className="text-center mb-16 fade-in-up">
                    <span className="inline-block px-3 py-1 rounded bg-white/5 text-white border border-white/10 text-xs font-bold tracking-[0.2em] mb-4">KNOWLEDGE BASE</span>
                    <h2 className="h2 text-4xl md:text-5xl">Frequently Asked Questions.</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`border rounded-2xl overflow-hidden transition-colors duration-500 fade-in-up delay-${(index + 1) * 100} ${isOpen ? 'bg-white/5 border-primary/30' : 'bg-transparent border-white/5 hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white'}`}>
                                        {faq.question}
                                    </span>

                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-500 ${isOpen ? 'border-primary text-primary rotate-180 bg-primary/10' : 'border-white/20 text-white/50 bg-transparent'}`}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </button>

                                <div
                                    className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}`}
                                >
                                    <p className="text-text-muted font-light leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
