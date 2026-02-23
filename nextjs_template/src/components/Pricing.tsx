'use client';
import { useState } from 'react';

const plans = [
    {
        name: 'Starter',
        description: 'Perfect for solo developers and small side projects.',
        monthlyPrice: 19,
        annualPrice: 15,
        features: ['1 Project License', 'Community Support', 'Basic Components', 'Free Lifetime Updates'],
        popular: false,
    },
    {
        name: 'Pro',
        description: 'Ideal for serious freelancers and growing agencies.',
        monthlyPrice: 49,
        annualPrice: 39,
        features: ['Unlimited Projects', 'Priority 24/7 Support', 'Premium Components', 'Figma Source Files', 'Commercial Rights'],
        popular: true,
    },
    {
        name: 'Enterprise',
        description: 'For large teams requiring scale and dedicated assistance.',
        monthlyPrice: 199,
        annualPrice: 159,
        features: ['Everything in Pro', 'Custom Integrations', 'Dedicated Success Manager', 'SLA Guarantees', 'On-Premise Deployment'],
        popular: false,
    },
];

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section id="pricing" className="section-padding relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 mix-blend-screen blur-[120px] rounded-full -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
                    <span className="inline-block px-3 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold tracking-[0.2em] mb-4">LICENSING</span>
                    <h2 className="h2 text-5xl">Transparent Pricing.</h2>
                    <p className="subtitle mx-auto mb-8">
                        Invest in your frontend architecture once, and reap the benefits forever. No hidden fees, no complex usage limits.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${!isAnnual ? 'text-white' : 'text-text-muted'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 transition-colors hover:border-primary/50 focus:outline-none"
                            aria-label="Toggle pricing plan"
                        >
                            <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-primary transition-transform duration-300 shadow-[0_0_10px_rgba(0,242,254,0.5)] ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
                        </button>
                        <span className={`text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-text-muted'}`}>
                            Annually <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] border border-emerald-500/30">Save 20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 fade-in-up delay-${(index + 1) * 100} ${plan.popular
                                    ? 'bg-[#0B0F1A] border-2 border-primary/50 shadow-[0_0_50px_rgba(0,242,254,0.15)] z-10 transform scale-105'
                                    : 'bg-white/5 border border-white/10 backdrop-blur-xl'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-primary to-secondary text-black font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full shadow-[0_0_20px_rgba(0,242,254,0.5)]">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-sm text-text-muted mb-8 h-10">{plan.description}</p>

                            <div className="mb-8 flex items-end gap-2">
                                <span className="text-5xl font-heading font-bold text-white">
                                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                </span>
                                <span className="text-text-muted pb-1">/ mo</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                                        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-white/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 ${plan.popular
                                        ? 'bg-primary text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                                    }`}
                            >
                                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
