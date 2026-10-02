export default function CTA() {
  return (
    <section className="dark cta-sec" id="start">
      <div className="wrap fin">
        <span className="cta-pill-badge">GET STARTED IN MINUTES</span>
        <h2 className="cta-headline">
          Ready to bring your <br />
          <span className="grad-text">team together?</span>
        </h2>
        <p className="cta-sub">
          Create your Karyz workspace in under 2 minutes. No credit card required.
        </p>

        <div className="cta-actions">
          <a className="btn c cta-primary-btn" href="#top">
            Start 14-day free trial
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a className="btn g cta-secondary-btn" href="#faq">
            Book a live demo
          </a>
        </div>

        <div className="cta-trust-chips">
          <span>✓ Free 14-day trial</span>
          <span>✓ No credit card required</span>
          <span>✓ Instant 2-min setup</span>
          <span>✓ 4.9/5 Rating (1,200+ reviews)</span>
        </div>
      </div>
    </section>
  );
}
