'use client';
import { useState } from 'react';

const plansData = {
  monthly: [
    {
      name: 'Starter',
      price: '$16',
      period: '/user/month',
      badge: 'Essential',
      desc: 'For small teams getting started with modern, calm workflows.',
      items: [
        'Up to 10 team members',
        'Core workspace boards & views',
        'Basic automation rules',
        'Live sprint analytics',
        'Standard email support',
      ],
      cta: 'Start 14-day trial',
      delay: '0s',
    },
    {
      name: 'Growth',
      price: '$32',
      period: '/user/month',
      badge: 'Most Popular',
      desc: 'For fast-moving teams that need speed, automations and scale.',
      items: [
        'Unlimited projects & views',
        'Advanced custom automations',
        'Real-time reporting dashboards',
        'Priority 24/7 support',
        'Unlimited cloud storage',
      ],
      cta: 'Start 14-day trial',
      delay: '.1s',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      badge: 'Tailored Scale',
      desc: 'For organisations requiring dedicated infrastructure & custom SLA.',
      items: [
        'Dedicated success manager',
        'Single Sign-On (SAML / SSO)',
        'Custom security audit logs',
        'Custom API rate limits',
        '99.99% Guaranteed uptime SLA',
      ],
      cta: 'Contact sales',
      delay: '.2s',
    },
  ],
  annual: [
    {
      name: 'Starter',
      price: '$12',
      period: '/user/month (billed annually)',
      badge: 'Save 25%',
      desc: 'For small teams getting started with modern, calm workflows.',
      items: [
        'Up to 10 team members',
        'Core workspace boards & views',
        'Basic automation rules',
        'Live sprint analytics',
        'Standard email support',
      ],
      cta: 'Start 14-day trial',
      delay: '0s',
    },
    {
      name: 'Growth',
      price: '$24',
      period: '/user/month (billed annually)',
      badge: 'Most Popular',
      desc: 'For fast-moving teams that need speed, automations and scale.',
      items: [
        'Unlimited projects & views',
        'Advanced custom automations',
        'Real-time reporting dashboards',
        'Priority 24/7 support',
        'Unlimited cloud storage',
      ],
      cta: 'Start 14-day trial',
      delay: '.1s',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      badge: 'Tailored Scale',
      desc: 'For organisations requiring dedicated infrastructure & custom SLA.',
      items: [
        'Dedicated success manager',
        'Single Sign-On (SAML / SSO)',
        'Custom security audit logs',
        'Custom API rate limits',
        '99.99% Guaranteed uptime SLA',
      ],
      cta: 'Contact sales',
      delay: '.2s',
    },
  ],
};

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(1); // default middle card selected

  const plans = plansData[billing];

  return (
    <section id="pricing" className="pricing-sec">
      <div className="wrap">
        <div className="head rv" style={{ opacity: 1, transform: 'none', textAlign: 'center', justifyItems: 'center' }}>
          <h2>
            Simple pricing that <span className="grad-text">scales with you.</span>
          </h2>
          <p>Choose the plan that fits your team. Upgrade, downgrade, or cancel anytime.</p>

          {/* Billing Switch */}
          <div className="pricing-billing-switch">
            <button
              type="button"
              className={`billing-btn ${billing === 'monthly' ? 'is-active' : ''}`}
              onClick={() => setBilling('monthly')}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`billing-btn ${billing === 'annual' ? 'is-active' : ''}`}
              onClick={() => setBilling('annual')}
            >
              Annual billing
              <span className="billing-discount-badge">Save 25%</span>
            </button>
          </div>
        </div>

        <div className="pg">
          {plans.map((p, i) => {
            const isSelected = selectedPlan === i;
            return (
              <div
                key={i}
                className={`pr ${isSelected ? 'is-selected' : ''}`}
                onMouseEnter={() => setSelectedPlan(i)}
                onClick={() => setSelectedPlan(i)}
                style={{ '--d': p.delay }}
              >
                <div className="pr-top-row">
                  <span className={`pr-badge ${isSelected ? 'badge-active' : ''}`}>{p.badge}</span>
                  {isSelected && <span className="pr-active-indicator">&bull; Active Plan</span>}
                </div>

                <div className="pr-header-block">
                  <h3 className="pr-name">{p.name}</h3>
                  <div className="am">
                    <span className="am-val">{p.price}</span>
                    {p.period && <small className="am-period">{p.period}</small>}
                  </div>
                  <p className="pr-desc">{p.desc}</p>
                </div>

                <div className="pr-divider"></div>

                <ul className="pr-features">
                  {p.items.map((item, j) => (
                    <li key={j}>
                      <span className="pr-check-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pr-btn-wrapper">
                  <a className={`btn ${isSelected ? 'c' : 'g'} pr-btn`} href="#start">
                    {p.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
