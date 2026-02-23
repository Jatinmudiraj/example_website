const features = [
    {
        title: 'Atomic Architecture',
        description: 'Every component is built in isolation, ensuring unparalleled modularity. Construct complex UIs like digital Lego blocks without fear of CSS collisions.',
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        ),
    },
    {
        title: 'Dynamic Theming',
        description: 'Powered by a cutting-edge CSS variable engine. Shift the entire aesthetic—from elegant corporate to neon dark mode—by changing three lines of code.',
        icon: (
            <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        ),
    },
    {
        title: 'Server-Side Supremacy',
        description: 'Leveraging Next.js 15 App Router. Pages are pre-rendered on the edge for zero-layout-shift (CLS) visual stability and flawless technical SEO scores.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
        ),
    },
];

export default function FeatureGrid() {
    return (
        <section id="services" className="section-padding relative">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
                    <span className="inline-block px-3 py-1 rounded bg-[#1A1F33] text-primary text-xs font-bold tracking-[0.2em] mb-4 border border-primary/20">THE CORE ENGINE</span>
                    <h2 className="h2 text-5xl mb-6">One Core. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">Infinite Possibilities.</span></h2>
                    <p className="subtitle mx-auto">
                        This isn&apos;t just a theme; it&apos;s a precision-engineered UI framework. Designed for agencies and ambitious startups who demand pixel-perfection and rapid iteration.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 xl:gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`glass-card p-10 fade-in-up delay-${(index + 1) * 100} group hover:-translate-y-2`}
                        >
                            {/* Inner card glow element */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-[#0F1423] border border-white/5 shadow-[inset_0_-2px_10px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                                    {/* Subtle inner light */}
                                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10">{feature.icon}</div>
                                </div>

                                <h3 className="h3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                                <p className="text-text-muted leading-relaxed font-light">
                                    {feature.description}
                                </p>

                                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 cursor-pointer">
                                    Explore Module <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
