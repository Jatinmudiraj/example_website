import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import MediaGrid from '@/components/MediaGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20 lg:h-24 bg-bg-main" />

      <HeroSection />

      <FeatureGrid />

      {/* Split Call To Action Section */}
      <section className="section-padding bg-bg-alt">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="h2 text-4xl md:text-5xl tracking-tight mb-6">
                Elegance meets <br />
                <span className="text-primary italic">Engineering</span>
              </h2>
              <p className="text-xl text-text-muted mb-8 leading-relaxed">
                By default, this layout acts as a powerful Corporate or SaaS landing page. However, swap the feature cards for products, and it's a high-end E-commerce storefront.
              </p>
              <ul className="space-y-4 mb-8">
                {['100% React/Next.js Architecture', 'TypeScript enforced safety', 'Tailwind completely integrated'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-text-main font-medium">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative fade-in-up delay-200">
              <div className="aspect-[4/5] md:aspect-video lg:aspect-square w-full rounded-3xl bg-gradient-to-br from-bg-card to-bg-accent-light shadow-2xl border border-border-subtle p-8 flex flex-col items-center justify-center">
                {/* Abstract UI representation */}
                <div className="w-full max-w-sm space-y-4 opacity-50">
                  <div className="h-8 w-1/3 bg-border-subtle rounded-md animate-pulse"></div>
                  <div className="h-4 w-2/3 bg-border-subtle rounded-md animate-pulse delay-75"></div>
                  <div className="h-4 w-1/2 bg-border-subtle rounded-md animate-pulse delay-100"></div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="h-24 bg-border-subtle rounded-xl animate-pulse delay-150"></div>
                    <div className="h-24 bg-border-subtle rounded-xl animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MediaGrid />

      {/* Final CTA */}
      <section id="contact" className="py-24 md:py-32 bg-primary text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-4xl relative z-10 fade-in-up">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-text-light mb-6 tracking-tight">Ready for Launch?</h2>
          <p className="text-xl md:text-2xl text-text-light/80 mb-10 max-w-2xl mx-auto">
            Get started immediately. Simply edit <code className="bg-text-main/20 px-2 py-1 rounded">globals.css</code> and watch the framework transform instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-text-light text-primary hover:bg-bg-main text-lg px-10">Deploy Template</button>
            <button className="btn btn-outline border-text-light/30 text-text-light hover:bg-text-light hover:text-primary text-lg px-10">Read Docs</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
