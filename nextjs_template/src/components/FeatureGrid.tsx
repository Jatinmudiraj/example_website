const features = [
    {
        title: 'Component Architecture',
        description: 'Stop rewriting code. Everything is a reusable React component built for scale and flexibility.',
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        ),
    },
    {
        title: 'Tailwind Mastery',
        description: 'Instant theming using global CSS variables mapped directly to Tailwinds robust utility classes.',
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
        ),
    },
    {
        title: 'Extreme Performance',
        description: 'Server-side rendered via Next.js App Router for maximum visual speed and SEO dominance.',
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        ),
    },
];

export default function FeatureGrid() {
    return (
        <section id="services" className="section-padding bg-bg-main relative">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">The Core Framework</span>
                    <h2 className="h2">One Foundation, Infinite Layouts</h2>
                    <p className="subtitle mx-auto">
                        This isn't just a theme; it's a UI engineering system. By altering a handful of CSS files, you can transform the entire visual mood in seconds.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`glass-card p-8 fade-in-up delay-${(index + 1) * 100} group`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="h3">{feature.title}</h3>
                            <p className="text-text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
