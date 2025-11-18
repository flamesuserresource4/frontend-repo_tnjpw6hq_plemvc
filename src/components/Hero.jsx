import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden flex items-center justify-center">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.35)_45%,rgba(2,6,23,0.65)_70%,rgba(2,6,23,0.9)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          Next‑gen Training Intelligence
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-sky-200 to-amber-200 drop-shadow">
          ChampionTrackPro
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
          Turn subjective feedback into real‑time insights, automatic alerts, and smart recommendations. Replace guesswork with precision.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#cta" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-400 text-white font-semibold shadow-lg shadow-violet-500/30 transition">
            Request Early Access
          </a>
          <a href="#story" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 font-semibold transition">
            Watch Vision Video
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
          {[
            { label: '10s logging', value: 'Athlete‑first UX' },
            { label: 'Live load trends', value: 'Coach dashboard' },
            { label: 'Fatigue signals', value: 'Early alerts' },
            { label: 'AI adjustments', value: 'Personalized' },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-wider text-white/60">{item.label}</div>
              <div className="mt-1 text-sm font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
