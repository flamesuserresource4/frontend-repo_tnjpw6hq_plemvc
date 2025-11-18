export default function Positioning() {
  return (
    <section id="positioning" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.08),transparent_40%),radial-gradient(circle_at_10%_80%,rgba(56,189,248,0.08),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Narrative positioning</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="font-semibold text-white">Category</h3>
            <p className="mt-2 text-white/80 text-sm">Training Intelligence Platform — converts subjective wellness into objective, actionable decisions in real time.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="font-semibold text-white">Value</h3>
            <ul className="mt-2 space-y-2 text-white/80 text-sm">
              <li>• Faster: 10‑second athlete logging</li>
              <li>• Smarter: AI turns signals into plans</li>
              <li>• Safer: Early fatigue and injury‑risk alerts</li>
              <li>• Scalable: Works for pro teams and universities</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="font-semibold text-white">One‑line</h3>
            <p className="mt-2 text-white/90 font-medium">“ChampionTrackPro replaces guesswork with precision — bringing data‑driven coaching to every team.”</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h4 className="font-semibold text-white">Proof points</h4>
            <ul className="mt-2 space-y-2 text-white/80 text-sm">
              <li>• Adoption: Athletes complete logs in under 10 seconds</li>
              <li>• Availability: Reduce soft‑tissue incidents with proactive load management</li>
              <li>• Clarity: Coaches see trends, spikes, and adjustments instantly</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h4 className="font-semibold text-white">Voice & tone</h4>
            <ul className="mt-2 space-y-2 text-white/80 text-sm">
              <li>• Confident, minimal, credible</li>
              <li>• Sports science savvy, never buzzwordy</li>
              <li>• Focused on outcomes, not features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
