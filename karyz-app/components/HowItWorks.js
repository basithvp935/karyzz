'use client';
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    stepNum: 'STEP 01',
    title: 'Create your account',
    desc: 'Sign up, name your store, and upload your logo. Your custom store URL is ready to share immediately.',
    tags: ['Free trial', 'No credit card needed'],
    slug: 'account',
    image: '/features/dashboard.jpg',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    stepNum: 'STEP 02',
    title: 'Add your products',
    desc: 'Upload photos, set prices, and write descriptions, or import your full catalog in bulk via CSV. Each product automatically gets a dedicated SEO page.',
    tags: ['Bulk import', 'SEO-ready pages'],
    slug: 'products',
    image: '/features/automations.jpg',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    stepNum: 'STEP 03',
    title: 'Add payments and shipping',
    desc: 'Connect Stripe, PayPal, or Razorpay with one-click authorization. Set local pickup, flat rate, or free delivery thresholds.',
    tags: ['Stripe', 'PayPal', 'Razorpay'],
    slug: 'payments',
    image: '/features/reports.jpg',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    stepNum: 'STEP 04',
    title: 'Share your store',
    desc: 'Add your storefront link to your Instagram bio, TikTok, WhatsApp business catalog, and email marketing signatures.',
    tags: ['Social links', 'WhatsApp', 'Email signature'],
    slug: 'share',
    image: '/features/security.jpg',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    stepNum: 'STEP 05',
    title: 'Start getting orders',
    desc: 'Receive real-time notifications when customers place an order. Print packing slips, update tracking numbers, and watch your revenue grow.',
    tags: ['Real-time alerts', 'Order dashboard'],
    slug: 'orders',
    image: '/store-preview.jpg',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= vh * 0.52 && rect.bottom >= vh * 0.22) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (idx) => {
    setActiveStep(idx);
    if (stepRefs.current[idx]) {
      stepRefs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="how" className="how-split-sec">
      <div className="wrap">
        <div className="how-split-layout">
          {/* Left Column - Sticky Info & Dynamic Image */}
          <div className="how-left-sticky">
            <span className="how-pill-tag">LIVE IN FIVE STEPS</span>
            <h2 className="how-main-title">
              How to create your <span className="grad-text">online store</span>
            </h2>
            <p className="how-main-desc">
              From initial sign-up to your very first customer order, every step is fast, intuitive, and requires zero coding knowledge.
            </p>

            {/* Dynamic Synchronized Image Box */}
            <div className="how-image-frame">
              <div className="how-image-topbar">
                <div className="frame-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="how-image-slug">
                  karyz.app/{steps[activeStep].slug}
                </div>
                <span className="how-active-pill">
                  {steps[activeStep].stepNum}
                </span>
              </div>
              <div className="how-image-viewport">
                {steps.map((s, i) => (
                  <img
                    key={i}
                    src={s.image}
                    alt={s.title}
                    className={`how-sync-img ${activeStep === i ? 'is-visible' : ''}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Center Divider */}
          <div className="how-timeline-col">
            <div className="how-line-track">
              <div
                className="how-line-progress"
                style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            {steps.map((s, i) => (
              <button
                key={i}
                type="button"
                className={`how-timeline-node ${activeStep === i ? 'node-active' : ''} ${activeStep > i ? 'node-passed' : ''}`}
                style={{ top: `${(i / (steps.length - 1)) * 88 + 6}%` }}
                onClick={() => scrollToStep(i)}
                aria-label={`Go to ${s.title}`}
              >
                {s.icon}
              </button>
            ))}
          </div>

          {/* Right Column - Scrollable Step Cards */}
          <div className="how-right-cards">
            {steps.map((s, i) => (
              <div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                className={`how-step-item ${activeStep === i ? 'item-active' : ''}`}
                onClick={() => scrollToStep(i)}
              >
                <div className="how-item-header">
                  <span className="how-step-code">{s.stepNum}</span>
                  {activeStep === i && <span className="how-status-active-badge">&bull; Active</span>}
                </div>
                <h3 className="how-item-title">{s.title}</h3>
                <p className="how-item-desc">{s.desc}</p>
                <div className="how-item-tags">
                  {s.tags.map((t, tidx) => (
                    <span key={tidx} className="how-tag-pill">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
