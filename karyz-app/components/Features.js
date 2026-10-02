export default function Features() {
  const features = [
    {
      label: 'Dashboard',
      title: 'See everything in one view',
      desc: 'Projects, sales and team activity update live on one screen, so you always act on current data.',
      urlSlug: 'dashboard',
      image: '/features/dashboard.jpg',
    },
    {
      label: 'Automations',
      title: 'Let repetitive work run itself',
      desc: 'Set a rule once. Karyz assigns, reminds and updates while your team focuses on the work that matters.',
      urlSlug: 'workflows',
      image: '/features/automations.jpg',
    },
    {
      label: 'Reports',
      title: 'Clear answers, ready to share',
      desc: 'Turn raw numbers into clean charts and send them to anyone with one click.',
      urlSlug: 'analytics',
      image: '/features/reports.jpg',
    },
    {
      label: 'Security',
      title: 'Protected from day one',
      desc: 'Encryption, roles and audit logs are built in, so your data stays yours.',
      urlSlug: 'security',
      image: '/features/security.jpg',
    },
  ];

  return (
    <section id="features" className="features-sec">
      <div className="wrap">
        <div className="head rv">
          <h2>
            Built for the way <span className="grad-text">teams really work.</span>
          </h2>
          <p>Four tools replace a dozen. Scroll to see how they fit together.</p>
        </div>
        <div className="stack">
          {features.map((f, i) => (
            <article className="stk glow" key={i} style={{ '--i': i }}>
              <div className="stk-content">
                <small>{f.label}</small>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
              <div className="vis feat-vis-container">
                <div className="feat-img-frame">
                  <div className="feat-frame-bar">
                    <div className="frame-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="frame-url">karyz.app/{f.urlSlug}</div>
                  </div>
                  <div className="feat-img-wrapper">
                    <img
                      src={f.image}
                      alt={`${f.title} - Karyz`}
                      className="feat-full-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
