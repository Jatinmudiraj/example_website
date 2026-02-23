import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import MediaGrid from '@/components/MediaGrid';
import LogoMarquee from '@/components/LogoMarquee';
import StatsSection from '@/components/StatsSection';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />

      <HeroSection />

      <FeatureGrid />

      {/* Premium Split Section */}
      <section className="section-padding relative border-y border-white/5 bg-[#060913]">
        {/* Background glow lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_4px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up md:pr-10">
              <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-widest mb-6">ARCHITECTURE</span>
              <h2 className="h2 text-5xl lg:text-6xl tracking-tight mb-8">
                Elegance meets <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-pink-400 italic">Engineering.</span>
              </h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed font-light">
                This isn&apos;t just a surface-level skin. We&apos;ve optimized the React hydration lifecycle and utilized CSS-only glassmorphism to guarantee 60fps scrolling on any device.
              </p>
              <ul className="space-y-6 mb-10">
                {['100% Next.js 15 App Router standard', 'Zero-runtime CSS via Tailwind V4', 'Fully typed TypeScript strict mode'].map((item, i) => (
                  <li key={item} className="flex items-center gap-4 text-white font-medium text-lg fade-in-up" style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-100 transition-opacity"></div>
                      <svg className="w-4 h-4 text-primary relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn btn-outline text-white hover:border-primary border-white/20 mt-4">Read Full Documentation</button>
            </div>

            {/* Visual Glass Box */}
            <div className="relative fade-in-up delay-200 group">
              {/* Behind glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

              <div className="aspect-[4/5] md:aspect-video lg:aspect-square w-full rounded-[2.5rem] bg-[#0A0F1D]/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,242,254,0.1)] border border-white/10 p-10 flex flex-col items-center justify-center relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-700">

                {/* Internal grid decor */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>

                {/* Abstract UI representation */}
                <div className="w-full max-w-sm space-y-6 opacity-60 group-hover:opacity-100 transition-opacity duration-700 relative z-10">
                  <div className="flex gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="h-10 w-1/3 bg-white/10 rounded-lg animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-white/5 rounded-md"></div>
                  <div className="h-4 w-1/2 bg-white/5 rounded-md mb-8"></div>
                  <div className="grid grid-cols-2 gap-6 mt-12">
                    <div className="h-32 bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 rounded-2xl animate-pulse backdrop-blur"></div>
                    <div className="h-32 bg-gradient-to-br from-secondary/20 to-transparent border border-secondary/20 rounded-2xl animate-pulse delay-150 backdrop-blur"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MediaGrid />

      <Pricing />

      <FAQ />

      {/* High-End Final CTA */}
      <section id="contact" className="py-32 md:py-48 bg-[#04060C] text-center px-4 relative overflow-hidden border-t border-white/5">
        {/* Massive vibrant gradient sweep */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-[#0A0F1D] to-secondary/10 opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-[100%] pointer-events-none animate-pulse"></div>

        <div className="container mx-auto max-w-5xl relative z-10 fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#00f2fe]"></span> Ready to Launch
          </span>

          <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-bold text-white mb-8 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Build the Future.
          </h2>
          <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Stop settling for mediocre templates. Deploy this pixel-perfect, highly optimized React engine today and instantly set your brand apart.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn btn-primary text-xl px-12 py-5 shadow-[0_0_30px_rgba(0,242,254,0.4)]">Initialize Setup</button>
            <button className="btn bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md text-xl px-12 py-5">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              View Source
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
