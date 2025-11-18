export default function LaunchBeats() {
  const beats = [
    {
      tag: 'Cold open',
      copy:
        'Silence. Heartbeat. Slow‑motion exhale. HUD‑style dots pulse around an athlete. “Training used to be guesswork.”',
    },
    {
      tag: 'Problem',
      copy:
        'Montage of messy spreadsheets, conflicting data, and coaches making calls in the dark. “Subjective data is powerful — but scattered, slow, and ignored.”',
    },
    {
      tag: 'Spark',
      copy:
        'A luminous ring activates at center screen (our brand aura). “What if feedback became intelligence — instantly?”',
    },
    {
      tag: 'The engine',
      copy:
        'Rapid cuts: 10‑second RPE log, sleep and soreness input, auto‑generated load trendline, fatigue warning spikes, AI suggestions flowing in real‑time.',
    },
    {
      tag: 'Human moment',
      copy:
        'A coach glances at the sideline tablet. An alert: “Early fatigue risk — reduce sprint volume by 12% today.” The athlete nods. Confidence replaces doubt.',
    },
    {
      tag: 'Proof',
      copy:
        'Numbers glide on screen: improved availability, reduced soft‑tissue incidents, stable wellness scores. Minimalist, credible, no hype.',
    },
    {
      tag: 'Call to action',
      copy:
        '“From elite clubs to universities — precision for every program.” Luminous gradient surges. “ChampionTrackPro.”',
    },
  ];

  return (
    <section id="story" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.1),transparent_40%),radial-gradient(circle_at_20%_90%,rgba(167,139,250,0.12),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Launch video story beats</h2>
        <p className="mt-3 text-white/80 max-w-3xl">
          A high‑impact narrative that moves from uncertainty to clarity — showcasing speed, signals, and smarter decisions.
        </p>

        <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 counter-reset">
          {beats.map((b, i) => (
            <li key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-wider text-white/60">{String(i + 1).padStart(2, '0')} • {b.tag}</div>
              <p className="mt-2 text-white/90">{b.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
