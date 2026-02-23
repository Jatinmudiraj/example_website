export default function StatsSection() {
    const stats = [
        { value: '99.9', suffix: '%', label: 'Uptime Reliability', detail: 'Zero downtime guaranteed by edge rendering.' },
        { value: '150', suffix: 'ms', label: 'Global TTFB', detail: 'Lightning fast Time to First Byte across the globe.' },
        { value: '60', suffix: 'fps', label: 'Frame Rate', detail: 'CSS-only glassmorphism ensures buttery scrolls.' },
        { value: '0', suffix: 'CLS', label: 'Layout Shift', detail: 'Pixel-perfect stablity out of the box.' }
    ];

    return (
        <section className="section-padding bg-[#0A0F1D] relative overflow-hidden border-t border-white/5">
            {/* Glow map behind stats */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-[120px] rounded-[100%] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-20 fade-in-up">
                    <span className="inline-block px-3 py-1 rounded bg-[#1A1F33] text-secondary text-xs font-bold tracking-[0.2em] mb-4 border border-secondary/20">TELEMETRY</span>
                    <h2 className="h2 text-5xl">Performance by Default.</h2>
                    <p className="subtitle mx-auto">
                        Metrics aren't an afterthought—they form the structural integrity of this template. We measure success in milliseconds and frame rates.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`relative overflow-hidden group p-8 rounded-3xl bg-[#060913]/60 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-colors fade-in-up delay-${(index + 1) * 100}`}
                        >
                            {/* Top animated line */}
                            <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-700 ease-in-out"></div>

                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter">
                                    {stat.value}
                                </span>
                                <span className="text-2xl font-bold text-primary">{stat.suffix}</span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">{stat.label}</h3>
                            <p className="text-sm text-text-muted font-light leading-relaxed">{stat.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
