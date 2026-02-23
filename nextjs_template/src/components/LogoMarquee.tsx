export default function LogoMarquee() {
    const logos = [
        {
            name: 'Vercel',
            viewbox: "0 0 283 64",
            path: "M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.64 0 12.08-3.28 15.68-8.8l-10-5.84c-1.76 2.16-3.84 3.6-6.4 3.6-4.56 0-8.24-3.36-8.72-8h26.4c.16-2.08.24-3.84.24-4.64 0-11.2-6.56-12.32-18.2-12.32zm-7.6 13.12c.96-5.12 4.4-8 8.4-8 4.24 0 8 2.64 8.72 8h-17.12zm139.76-13.12c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.64 0 12.08-3.28 15.68-8.8l-10-5.84c-1.76 2.16-3.84 3.6-6.4 3.6-4.56 0-8.24-3.36-8.72-8h26.4c.16-2.08.24-3.84.24-4.64 0-11.2-6.56-12.32-18.2-12.32zm-7.6 13.12c.96-5.12 4.4-8 8.4-8 4.24 0 8 2.64 8.72 8h-17.12zm-35.12-13.12c-10.4 0-18.56 7.44-18.56 18s8.16 18 18.56 18c6.8 0 12-3.6 14.88-8.96l-9.84-5.6c-1.36 2-3.04 3.36-5.36 3.36-4.96 0-7.84-3.84-7.84-8.8 0-4.96 2.88-8.8 7.84-8.8 2.4 0 4.08 1.44 5.44 3.52l9.76-5.76c-2.96-5.28-8.16-8.96-14.88-8.96zm-74.88 0c-4.72 0-8.48 2.32-10.72 6.08v-5.44h-10.4v34.56h10.4v-18.24c0-5.44 3.12-8.32 7.68-8.32 4.48 0 7.36 2.88 7.36 8.32v18.24h10.4v-20.16c.08-8.48-5.36-15.04-14.72-15.04zm-37.52 34.56h10.4V16.89h-10.4v33.92zM14.16 16.89L0 51.45h11.2l9.04-21.76 9.04 21.76h11.2L14.16 16.89z"
        },
        {
            name: 'React',
            viewbox: "-11.5 -10.23174 23 20.46348",
            path: "M-1.334 9.172A17.9 17.9 0 000 9.243c1.33 0 2.571-.165 3.654-.468A14.2 14.2 0 011.66 6.845a19.7 19.7 0 01-1.66 2.327zM-10.44 3.425a17.9 17.9 0 001.385 2.14 14.2 14.2 0 012.75 2.45c-2.094-.158-4.008-.66-5.216-1.42A3.2 3.2 0 01-12.8 5.44a3.2 3.2 0 012.36-2.015zm6.822-2.1c-.886.723-1.854 1.51-2.613 2.162-2.317-.463-4.2-.74-5.3-1.07A3.2 3.2 0 01-12.8-5.44a3.2 3.2 0 011.08-1.155A17.9 17.9 0 00-10.44-3.42C-8.47-1.1-5.786.138-3.618 1.325zm9.645-3.268a3.2 3.2 0 01-1.28 1.155c-1.1.33-2.984.607-5.302 1.07-.76-.653-1.728-1.44-2.614-2.163A14.2 14.2 0 01-.013-6.845a19.7 19.7 0 011.66-2.327A17.9 17.9 0 00-1.334-9.25a17.9 17.9 0 00-1.334.075c2.169 1.187 4.851 2.427 6.82 4.747 1.026-.525 2.15-1.096 3.655-1.468M-12.062 1A3.2 3.2 0 01-12.8-1.11A3.2 3.2 0 01-12.06-3.23c1.206.762 3.12 1.264 5.214 1.42a14.2 14.2 0 010 3.63A17.9 17.9 0 00-10.44-3.42a17.9 17.9 0 00-1.624 4.42zm1.623-4.425a17.9 17.9 0 001.383-2.14 19.7 19.7 0 011.662 2.327 14.2 14.2 0 012.75-2.45c-1.17 1.956-2.479 4.318-2.613 5.48-.135 1.162-.27 2.324-.405 3.485a19.7 19.7 0 01-1.66-2.327A17.9 17.9 0 00-10.44 3.42zm5.82 1.42A14.2 14.2 0 01-2.413 6.845a19.7 19.7 0 01-2.222.8c-1.2-1.955-2.5-4.316-2.613-5.474-.112-1.158-.225-2.316-.338-3.473"
        },
        {
            name: 'Tailwind',
            viewbox: "0 0 100 60",
            path: "M 32 10 c -5 -4 -16 -4 -22 6 c -4 5 -4 14 0 20 c 4 5 11 5 15 0 s 13 -12 25 -10 c 8 1 12 7 11 14 c -2 8 -10 12 -16 11 m 36 -28 c -5 -4 -16 -4 -22 6 c -4 5 -4 14 0 20 c 4 5 11 5 15 0 s 13 -12 25 -10 c 8 1 12 7 11 14 c -2 8 -10 12 -16 11",
            fill: "none",
            strokeWidth: "8",
            strokeLinecap: "round"
        },
        {
            name: 'Nextjs',
            viewbox: "0 0 180 180",
            path: "M90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90C180 139.706 139.706 180 90 180ZM75.2929 60V120H86.2753L123.636 60H112.553L75.2929 119.387V60H75.2929ZM133.727 60V120H144.71V60H133.727Z"
        },
        {
            name: 'Stripe',
            viewbox: "0 0 100 50",
            path: "M15.4,32L5,32L5,15.6C5,12.7,7.2,10.6,10,10.6c2.8,0,5.1,1.9,5.4,4.7H15.4z M32,32h-10.4V11H32V32z M55.3,32h-10.4V11h10.4V32z M58.4,21.5c0-6,4.7-10.9,10.6-10.9c5.9,0,10.6,4.9,10.6,10.9s-4.7,10.9-10.6,10.9C63.1,32.4,58.4,27.5,58.4,21.5z M69,16.5c-2.8,0-5,2.2-5,5s2.2,5,5,5c2.8,0,5-2.2,5-5S71.8,16.5,69,16.5z"
        }
    ];

    // Duplicate for seamless infinite scrolling
    const scrollItems = [...logos, ...logos, ...logos];

    return (
        <section className="py-12 border-y border-white/5 bg-[#060913] relative overflow-hidden">
            {/* Edge Gradients for smooth fade-in/out */}
            <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#060913] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#060913] to-transparent z-10 pointer-events-none"></div>

            <div className="flex container mx-auto px-4 max-w-7xl justify-center items-center gap-12 text-sm font-bold tracking-widest text-[#94A3B8] uppercase mb-8 fade-in-up">
                <span className="h-px bg-white/10 w-12 hidden md:block"></span>
                <span className="flex-shrink-0">Trusted by modern engineering teams</span>
                <span className="h-px bg-white/10 w-12 hidden md:block"></span>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="flex space-x-16 items-center px-8 animate-marquee group-hover:[animation-play-state:paused] min-w-max">
                    {scrollItems.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="w-40 h-16 flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors duration-300 transform hover:scale-110 opacity-50 hover:opacity-100"
                        >
                            {logo.fill ? (
                                <svg viewBox={logo.viewbox} className="max-w-full max-h-full fill-current" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d={logo.path} fill="none" strokeWidth={logo.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg viewBox={logo.viewbox} className="max-w-full max-h-full fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d={logo.path} />
                                </svg>
                            )}
                            {/* Fallback hidden text */}
                            <span className="sr-only">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
