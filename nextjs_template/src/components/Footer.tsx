export default function Footer() {
    return (
        <footer className="bg-[#04060C] text-white/50 pt-24 pb-12 relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-3 lg:pr-10">
                        <a href="#" className="flex items-center gap-3 text-2xl font-bold font-heading text-white mb-6 group w-max">
                            <svg className="w-8 h-8 text-primary group-hover:rotate-90 transition-transform duration-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                            <span className="tracking-widest uppercase">Nexus</span>
                        </a>
                        <p className="text-sm leading-relaxed mb-8 font-light">
                            A meticulously engineered React template built on Next.js 15 and Tailwind CSS. Designed to scale and adapt to any visual requirement instantly.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-all duration-300">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-all duration-300">
                                <span className="sr-only">GitHub</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Spacer Column */}
                    <div className="hidden lg:block col-span-2"></div>

                    {/* Nav Columns */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Platform</h4>
                        <ul className="flex flex-col gap-4 text-sm font-light">
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Architecture</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Integrations</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Security</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Enterprise</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Solutions</h4>
                        <ul className="flex flex-col gap-4 text-sm font-light">
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">E-Commerce</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">SaaS Dashboards</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Creative Agencies</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Web3 Platforms</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-3">
                        <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Company</h4>
                        <ul className="flex flex-col gap-4 text-sm font-light">
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">About Nexus</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Careers <span className="ml-2 py-0.5 px-2 bg-primary/20 text-primary text-[10px] rounded-sm uppercase tracking-widest font-bold border border-primary/30">Hiring</span></a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light">
                    <p>&copy; 2026 Nexus Engineering Inc. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgb(16,185,129)]"></span>
                            All Systems Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
