const projects = [
    {
        id: 1,
        title: 'Nexus Commerce',
        category: 'E-Commerce Platform',
        desc: 'High-conversion headless storefront.',
        cols: 'md:col-span-2',
        bg: 'bg-[radial-gradient(ellipse_at_top_left,_#1A1F33,_#0F1423,_#04060C)]'
    },
    {
        id: 2,
        title: 'Pulse Dashboard',
        category: 'SaaS Analytics',
        desc: 'Real-time telemetry and user tracking metrics.',
        cols: 'md:col-span-1',
        bg: 'bg-gradient-to-br from-[#0F1423] to-[#04060C]'
    },
    {
        id: 3,
        title: 'Aura Agency',
        category: 'Creative Portfolio',
        desc: 'Award-winning masonry showcase.',
        cols: 'md:col-span-1',
        bg: 'bg-gradient-to-tr from-[#140F23] to-[#04060C]'
    },
    {
        id: 4,
        title: 'Chronicle Blog',
        category: 'Editorial Layout',
        desc: 'Typography-first reading experience.',
        cols: 'md:col-span-2',
        bg: 'bg-[radial-gradient(ellipse_at_bottom_right,_#0F1B2A,_#04060C)]'
    },
];

export default function MediaGrid() {
    return (
        <section id="portfolio" className="section-padding relative border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 fade-in-up">
                    <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold tracking-[0.2em] mb-4">SHOWCASE</span>
                        <h2 className="h2 text-5xl">Built to be Adaptive.</h2>
                        <p className="text-text-muted text-lg mt-4 font-light">
                            This gallery demonstrates the template&apos;s versatility. By varying column spans and adding layered hover states, standard grids transform into immersive visual experiences.
                        </p>
                    </div>
                    <button className="btn btn-primary mt-8 lg:mt-0 hidden sm:flex group">
                        View All Showcases
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>

                {/* Masonry-style Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`group relative overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl min-h-[400px] cursor-pointer ${project.cols} fade-in-up delay-${(index + 1) * 100}`}
                        >
                            {/* Background Plate */}
                            <div className={`absolute inset-0 ${project.bg} transition-transform duration-1000 group-hover:scale-105`}>
                                {/* Decorative grid pattern lines */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                            </div>

                            {/* Hover Darkening Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Graphic Placeholder indicating Media */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full flex items-center justify-center opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-150 rotate-45 group-hover:rotate-90">
                                <div className="w-20 h-20 border border-primary/30 rounded-full flex items-center justify-center">
                                    <span className="font-mono text-primary text-xs tracking-widest block rotate-[-90deg]">MEDIA</span>
                                </div>
                            </div>

                            {/* Content Box - slides up on hover */}
                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.category}</span>
                                <h3 className="text-3xl font-heading font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-white/60 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">{project.desc}</p>

                                {/* Arrow indicator */}
                                <div className="absolute right-8 bottom-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 text-white opacity-0 group-hover:opacity-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
