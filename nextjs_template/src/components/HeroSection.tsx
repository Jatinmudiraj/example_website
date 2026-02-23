export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/30 mix-blend-multiply opacity-50 blur-3xl rounded-full -translate-y-1/4 translate-x-1/4 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 mix-blend-multiply opacity-40 blur-3xl rounded-full translate-y-1/4 -translate-x-1/4"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <span className="inline-block animate-fade-in-up py-1 px-3 rounded-full bg-accent text-primary text-sm font-semibold tracking-wide border border-primary/20 mb-6">
                        Next.js Core Architecture
                    </span>
                    <h1 className="h1 animate-fade-in-up delay-100">
                        Design at the <span className="text-primary bg-clip-text">Speed of Thought</span>
                    </h1>
                    <p className="subtitle mx-auto lg:mx-0 animate-fade-in-up delay-200">
                        A meticulously crafted universal React template. Switch between a SaaS landing page, complex dashboard, or lush portfolio just by tweaking a few CSS variables in <code className="bg-bg-card border border-border-subtle px-1 rounded text-primary">globals.css</code>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                        <a href="#services" className="btn btn-primary text-lg px-8">
                            Explore Features
                        </a>
                        <a href="#portfolio" className="btn btn-outline text-lg px-8">
                            View Examples
                        </a>
                    </div>
                </div>

                {/* Visual / Image Area */}
                <div className="relative animate-fade-in-up delay-200">
                    <div className="aspect-[4/3] w-full bg-gradient-to-br from-bg-card to-bg-main border-2 border-dashed border-border-subtle rounded-3xl flex flex-col items-center justify-center text-text-muted shadow-2xl relative z-10 overflow-hidden group">
                        <svg className="w-20 h-20 text-primary/40 mb-4 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span className="font-mono text-sm tracking-wider">HERO_VISUAL_PLACEHOLDER</span>
                        {/* Glass decoration inside placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/20 backdrop-blur-[2px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Floating UI Elements Decor */}
                    <div className="absolute -bottom-6 -left-6 bg-bg-card p-4 rounded-xl shadow-lg border border-border-subtle z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">✓</div>
                            <div>
                                <div className="text-sm font-bold text-text-main">Performance Test</div>
                                <div className="text-xs text-text-muted">Lighthouse 100/100</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
