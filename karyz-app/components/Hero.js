export default function Hero() {
  return (
    <header className="hero" id="top">
      {/* Ambient orbs */}
      <div className="orb o1" data-sp="-.12"></div>
      <div className="orb o2" data-sp=".1"></div>
      <div className="orb o3"></div>
      {/* Grid overlay */}
      <div className="hero-grid" aria-hidden="true"></div>

      <div className="wrap hero-wrap">

        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">

          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20" />
                <path d="M12 2a10 10 0 0 0-10 10" />
                <path d="M2 12a10 10 0 0 0 10 10" />
                <path d="M12 22a10 10 0 0 0 10-10" />
                <path d="M22 12a10 10 0 0 0-10-10" />
              </svg>
            </span>
            <span>THE FUTURE OF B2B COMMERCE</span>
            <span className="badge-line" aria-hidden="true"></span>
          </div>

          {/* Headline */}
          <h1 className="hero-title-serif">
            <span><i>Your Distribution Business. <span className="grad-text">Your Brand.</span></i></span>
            <span><i>Your Online Store.</i></span>
          </h1>

          {/* Description */}
          <p className="hero-desc">
            The all-in-one platform to run your projects, customers and reporting. Work smarter, deliver faster, and make every team experience unmistakably yours.
          </p>

          {/* CTAs */}
          <div className="hero-cta-row">
            <a className="btn c hero-btn-primary" href="#start">
              Start free trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a className="btn g hero-btn-secondary" href="#features">
              Explore features
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── STOREFRONT MOCKUP ── */}
        <div className="hero-right-col">
          <div className="dash hero-store-card" id="dash" aria-hidden="true">
            <div className="dash-topbar">
              <div className="dh"><b></b><b></b><b></b></div>
              <div className="dash-title">karyz.store.app — Live Storefront</div>
              <div className="dash-actions">
                <span className="dash-chip">● Live Store</span>
                <span className="dash-chip dash-chip-ghost">Bestsellers</span>
              </div>
            </div>
            <div className="store-img-wrapper">
              <img
                src="/store-preview.jpg"
                alt="Karyz Online Storefront"
                className="store-full-img"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
