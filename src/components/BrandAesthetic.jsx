export default function BrandAesthetic() {
  return (
    <section id="brand" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.12),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(251,191,36,0.12),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Brand identity & aesthetic</h2>
        <p className="mt-3 text-white/80 max-w-3xl">
          Futuristic, minimal and performance‑centric. A luminous gradient core (violet → sky → amber) represents adaptive intelligence. Use dark slate surfaces, soft glass panels, and micro‑glows that feel precise, not flashy.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="font-semibold text-white">Color system</h3>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li><span className="font-medium text-white">Core gradient:</span> #A78BFA → #7DD3FC → #FBBF24</li>
              <li><span className="font-medium text-white">Surfaces:</span> slate‑900 / slate‑800 with 6–12% noise</li>
              <li><span className="font-medium text-white">Accents:</span> violet‑400, sky‑300, amber‑300 glows</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="font-semibold text-white">Typography</h3>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li><span className="font-medium text-white">Headlines:</span> Inter/Geist, heavy tracking‑tight</li>
              <li><span className="font-medium text-white">Body:</span> Manrope/IBM Plex Sans for clarity</li>
              <li><span className="font-medium text-white">Numbers:</span> Tabular alternates for dashboards</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="font-semibold text-white">UI style</h3>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li>Glass cards with 8–12px radius, 12–16 blur</li>
              <li>Thin 1px borders (white/10) + subtle inner light</li>
              <li>Micro‑motions: pulse, shimmer, springy hover</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
