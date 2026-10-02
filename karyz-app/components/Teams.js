const panels = [
  {
    tab: 'Agencies',
    title: 'Keep every client on track',
    desc: 'Run many projects at once without losing the thread.',
    items: ['Client portals with live status', 'Time and budget tracking', 'Approvals in one click'],
  },
  {
    tab: 'Startups',
    title: 'Move fast, stay organised',
    desc: 'Ship weekly and keep the whole team pointed the same way.',
    items: ['Roadmaps and sprints together', 'Customer feedback in context', 'Free plan to start'],
  },
  {
    tab: 'Enterprises',
    title: 'Scale with control',
    desc: 'Give every department what it needs and keep governance intact.',
    items: ['Single sign-on and roles', 'Audit logs and data controls', 'Dedicated success manager'],
  },
];

export default function Teams() {
  return (
    <section id="teams" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head rv">
          <h2>One platform, many ways to work.</h2>
        </div>
        <div className="tabs rv" role="tablist">
          {panels.map((p, i) => (
            <button
              key={i}
              className="tab"
              role="tab"
              aria-selected={i === 0 ? 'true' : 'false'}
              data-t={i}
            >
              {p.tab}
            </button>
          ))}
        </div>
        {panels.map((p, i) => (
          <div key={i} className={`panel glow${i === 0 ? ' on rv' : ''}`}>
            <div>
              <h3>{p.title}</h3>
              <p style={{ marginTop: '14px' }}>{p.desc}</p>
            </div>
            <ul>
              {p.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
