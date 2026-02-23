export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
            {/* Premium Dynamic Background Decor - Modern Oceanic */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 mix-blend-screen blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 animate-float pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/15 mix-blend-screen blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 animate-float-slow pointer-events-none delay-1000"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 grid xl:grid-cols-12 gap-16 items-center">
                {/* Text Content */}
                <div className="xl:col-span-7 flex flex-col justify-center text-center xl:text-left h-full">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 mx-auto xl:mx-0 w-max shadow-[0_0_15px_rgba(0,242,254,0.1)] fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-sm font-semibold text-white/80 tracking-widest uppercase">Nexus 3.0 Released</span>
                    </div>

                    <h1 className="h1 fade-in-up delay-100">
                        Design at the <br className="hidden xl:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-white">Speed of Thought.</span>
                    </h1>

                    <p className="subtitle mx-auto xl:mx-0 fade-in-up delay-200">
                        A meticulously crafted universal React template. Switch between a high-end SaaS platform, complex dashboard, or a lush portfolio just by tweaking a single CSS file. Extreme performance meets uncompromising aesthetics.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start fade-in-up delay-300 mt-4">
                        <a href="#services" className="btn btn-primary">
                            Explore the System
                        </a>
                        <a href="#portfolio" className="btn btn-outline text-white group">
                            View Showcases
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start fade-in-up delay-300">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#060913] bg-gradient-to-tr from-white/10 to-white/30 backdrop-blur-sm flex items-center justify-center text-xs font-bold`}>
                                    USR
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="flex text-primary mb-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                            </div>
                            <p className="text-sm font-medium text-white/50">Used by 10,000+ developers</p>
                        </div>
                    </div>
                </div>

                {/* Visual / Image Area - Abstract 3D Representation */}
                <div className="xl:col-span-5 relative fade-in-up delay-200 mt-12 xl:mt-0 xl:h-full min-h-[500px] flex items-center justify-center w-full">
                    <div className="relative w-full max-w-[500px] aspect-[4/5] mx-auto group">
                        {/* Main glowing container */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-700 opacity-60"></div>

                        {/* Glass panel */}
                        <div className="absolute inset-0 border border-white/10 bg-white/5 backdrop-blur-[20px] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center shadow-2xl z-10 p-8 text-center transition-transform duration-700 group-hover:scale-[1.02]">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-cyan-200 blur shadow-[0_0_50px_rgba(0,242,254,0.6)] animate-pulse mb-8 z-0 relative">
                                <div className="absolute inset-0 bg-white rounded-full mix-blend-overlay"></div>
                            </div>

                            <h3 className="text-xl font-bold tracking-widest text-white mb-2 relative z-10">THE ENGINE</h3>
                            <p className="font-mono text-sm text-primary/70 relative z-10">&lt;React.StrictMode /&gt;</p>

                            {/* Simulated code block lines */}
                            <div className="mt-8 w-full max-w-[200px] space-y-3 relative z-10 opacity-60">
                                <div className="h-2 w-full bg-white/20 rounded-full"></div>
                                <div className="h-2 w-4/5 bg-primary/40 rounded-full"></div>
                                <div className="h-2 w-5/6 bg-white/20 rounded-full"></div>
                            </div>
                        </div>

                        {/* Floating element 1 */}
                        <div className="absolute -left-10 top-20 bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl z-20 animate-float" style={{ animationDelay: '-2s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                                <div>
                                    <div className="text-sm font-bold text-white">Lighthouse</div>
                                    <div className="text-xs text-white/50">Performance 100</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating element 2 */}
                        <div className="absolute -right-8 bottom-24 bg-[#0a0f1d] border border-primary/30 p-4 rounded-xl shadow-[0_0_30px_rgba(0,242,254,0.15)] z-20 animate-float" style={{ animationDelay: '-5s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                                <div>
                                    <div className="text-sm font-bold text-white">Next.js 15</div>
                                    <div className="text-xs text-primary/70">App Router</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
