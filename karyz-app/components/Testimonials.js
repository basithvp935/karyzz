'use client';
import { useState } from 'react';

const quotes = [
  {
    quote: 'Karyz replaced five separate tools and gave our entire team its Mondays back.',
    name: 'Alexandra Vance',
    role: 'Operations Lead, Nova Agency',
    metric: 'Saved 14 hrs/wk',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    delay: '0s',
  },
  {
    quote: 'Our weekly financial reports used to take an entire day. Now they take literally under a minute.',
    name: 'Marcus Chen',
    role: 'Finance Director, Elevate Inc',
    metric: '10x Faster reporting',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    delay: '.1s',
  },
  {
    quote: 'Our entire team setup was done before lunch, and everyone just instantly understood how to use it.',
    name: 'Elena Rostova',
    role: 'Founder, SeedStage Labs',
    metric: '100% Team adoption',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
    delay: '.2s',
  },
];

export default function Testimonials() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="dark test-sec">
      <div className="wrap">
        <div className="head rv" style={{ opacity: 1, transform: 'none' }}>
          <h2 style={{ color: '#ffffff' }}>
            Loved by the teams <span className="grad-text">who use it.</span>
          </h2>
          <p style={{ color: '#D9D0EC' }}>
            Join thousands of fast-moving companies that run on Karyz every single day.
          </p>
        </div>
        <div className="qs">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className={`qc glow ${activeCard === i ? 'is-highlighted' : ''}`}
              onMouseEnter={() => setActiveCard(i)}
              onClick={() => setActiveCard(i)}
              style={{ margin: 0, '--d': q.delay }}
            >
              <div className="qc-stars">
                &#9733;&#9733;&#9733;&#9733;&#9733;
                <span className="qc-metric">{q.metric}</span>
              </div>
              <blockquote>"{q.quote}"</blockquote>
              <div className="qc-author">
                <img src={q.avatar} alt={q.name} className="qc-avatar" />
                <div className="qc-author-info">
                  <strong>{q.name}</strong>
                  <cite>{q.role}</cite>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
