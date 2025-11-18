import Hero from './components/Hero';
import BrandAesthetic from './components/BrandAesthetic';
import LaunchBeats from './components/LaunchBeats';
import Positioning from './components/Positioning';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.8)]" />
            ChampionTrackPro
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#brand" className="hover:text-white">Brand</a>
            <a href="#story" className="hover:text-white">Launch Video</a>
            <a href="#positioning" className="hover:text-white">Positioning</a>
            <a href="#cta" className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15">Request Access</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <BrandAesthetic />
        <LaunchBeats />
        <Positioning />

        {/* CTA */}
        <section id="cta" className="relative py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(167,139,250,0.14),transparent_40%)]" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Bring precision to your program</h3>
            <p className="mt-3 text-white/80">Join the early access cohort for pro teams and universities.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
              <input required type="email" placeholder="Work email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400 placeholder:text-white/50" />
              <button className="rounded-xl bg-violet-500 hover:bg-violet-400 px-6 py-3 font-semibold shadow-lg shadow-violet-500/30" type="submit">Request Access</button>
            </form>
            <p className="mt-3 text-xs text-white/60">No spam — we’ll follow up with next steps.</p>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 py-8 text-center text-white/50">
        <div className="max-w-6xl mx-auto px-6">
          © {new Date().getFullYear()} ChampionTrackPro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
