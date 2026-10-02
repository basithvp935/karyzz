'use client';
import { useState } from 'react';

const faqs = [
  {
    category: 'PLANS',
    q: 'Is there a free plan available?',
    a: 'Yes. Starter is free forever for up to three users with no credit card needed. You can test all core boards and views with zero commitment.',
  },
  {
    category: 'SETUP',
    q: 'How long does team onboarding take?',
    a: 'Most teams are working in Karyz within an afternoon. Our guided importer automatically maps your columns, tags, and tasks with zero technical setup.',
  },
  {
    category: 'MIGRATION',
    q: 'Can I import my existing data from other apps?',
    a: 'Yes. Bring in data directly from spreadsheets, Notion, Slack, Jira, Trello, or CSVs. 2-way bi-directional sync keeps your records current.',
  },
  {
    category: 'SECURITY',
    q: 'How is our company data protected?',
    a: 'All data is encrypted with AES-256 at rest and TLS in transit. Enterprise features include SAML SSO, custom role permissions, and full audit logs.',
  },
  {
    category: 'SUPPORT',
    q: 'What kind of customer support is included?',
    a: 'Every workspace includes access to our support team and knowledge hub. Growth and Enterprise plans receive priority 24/7 assistance and a dedicated manager.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-split-sec">
      <div className="wrap">
        <div className="faq-split-layout">
          {/* Left Column - Sticky Info & Support Card */}
          <div className="faq-left-col">
            <span className="faq-pill-tag">HERE TO HELP</span>
            <h2 className="faq-main-title">
              Good questions, <br />
              <span className="grad-text">good answers.</span>
            </h2>
            <p className="faq-main-desc">
              Can't find what you're looking for? Our friendly support team is just a message away.
            </p>

            {/* Support Widget Box */}
            <div className="faq-support-box">
              <div className="faq-support-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="faq-support-text">
                <strong>Still have questions?</strong>
                <p>We typically reply within a few hours.</p>
                <a href="#contact" className="faq-support-link">
                  Contact support &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion Question Cards */}
          <div className="faq-right-col">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`faq-card ${isOpen ? 'faq-card-open' : ''}`}
                  onClick={() => toggleFAQ(i)}
                >
                  <div className="faq-card-header">
                    <span className="faq-cat-badge">{f.category}</span>
                    <h3 className="faq-card-q">{f.q}</h3>
                    <button
                      type="button"
                      className={`faq-toggle-btn ${isOpen ? 'btn-open' : ''}`}
                      aria-label="Toggle answer"
                    >
                      {isOpen ? '−' : '+'}
                    </button>
                  </div>
                  {isOpen && (
                    <div className="faq-card-body">
                      <p>{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
