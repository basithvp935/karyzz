export default function Features() {
  const features = [
    {
      label: 'BUSINESS OVERVIEW',
      title: 'See Your Entire Business in One View',
      desc: 'Monitor sales, orders, products, inventory and distribution activity from one powerful dashboard. Get the visibility you need to make faster business decisions.',
      urlSlug: 'dashboard',
      image: '/features/dashboard.png',
    },
    {
      label: 'DISTRIBUTION MANAGEMENT',
      title: 'Connect Your Entire Distribution Network',
      desc: 'Manage suppliers, distributors, sub-distributors and retailers through one connected platform. Control products, pricing, orders and relationships at every level of your distribution network.',
      urlSlug: 'distribution',
      image: '/features/d2.png',
    },
    {
      label: 'B2B COMMERCE',
      title: 'Turn Your Product Catalogue Into a Powerful B2B Store',
      desc: 'Give your distributors and retailers a simple way to discover products, view business pricing, place orders and track purchases online.',
      urlSlug: 'b2b-store',
      image: '/features/d3.png',
    },
    {
      label: '100% WHITE LABEL',
      title: 'Your Business. Your Brand. Your Platform.',
      desc: 'Launch Karyz under your own identity. Use your own domain, logo, brand colors and visual style to give your customers a completely branded experience.',
      urlSlug: 'white-label',
      image: '/features/d4.png',
    },
  ];

  return (
    <section id="features" className="features-sec">
      <div className="wrap">
        <div className="head rv">
          <span className="head-pill">KEY CAPABILITIES</span>
          <h2>
            Everything your <span className="grad-text">distribution business needs.</span>
          </h2>
          <p>
            Four interconnected modules designed to replace disconnected tools, automate your daily workflow, and power your complete B2B commerce network.
          </p>
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
