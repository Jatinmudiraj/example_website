const projects = [
    { id: 1, title: 'Project Nexus', category: 'E-Commerce', image: 'bg-gradient-to-br from-primary to-accent' },
    { id: 2, title: 'Blog Post Title', category: 'Article', image: 'bg-gradient-to-tr from-secondary to-pink-300' },
    { id: 3, title: 'Dashboard UI', category: 'SaaS', image: 'bg-gradient-to-bl from-blue-500 to-primary' },
    { id: 4, title: 'Agency Portfolio', category: 'Design', image: 'bg-gradient-to-tl from-purple-500 to-indigo-400' },
];

export default function MediaGrid() {
    return (
        <section id="portfolio" className="section-padding bg-bg-card border-t border-border-subtle">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 fade-in-up">
                    <div className="max-w-xl">
                        <h2 className="h2">Adaptable Media Grid</h2>
                        <p className="text-text-muted text-lg">
                            Below is a reusable grid. This component is structurally identical whether you're building a shop page, a blog feed, or a photography portfolio.
                        </p>
                    </div>
                    <button className="btn btn-outline mt-6 md:mt-0 hidden sm:flex">View More</button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`group cursor-pointer fade-in-up delay-${(index + 1) * 100}`}
                        >
                            <div className={`aspect-square w-full rounded-2xl mb-4 ${project.image} relative overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300`}>
                                <div className="absolute inset-0 bg-text-main/0 group-hover:bg-text-main/10 transition-colors duration-300"></div>
                                {/* Placeholder indicator */}
                                <div className="absolute inset-0 flex items-center justify-center font-mono text-white/50 text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    IMAGE_{project.id}
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">{project.category}</span>
                                <h3 className="text-lg font-heading font-semibold text-text-main group-hover:text-primary transition-colors">{project.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-10 text-center sm:hidden fade-in-up delay-300">
                    <button className="btn btn-outline w-full">View More</button>
                </div>
            </div>
        </section>
    );
}
