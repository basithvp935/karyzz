const stats = [
  { count: 12000, suf: '+', label: 'Teams on Karyz', delay: '0s' },
  { count: 99,    suf: '%', label: 'Uptime every month', delay: '.1s' },
  { count: 40,    suf: '%', label: 'Less time on admin', delay: '.2s' },
  { count: 150,   suf: '+', label: 'Integrations', delay: '.3s' },
];

export default function Stats() {
  return (
    <section className="dark">
      <div className="wrap">
        <div className="head rv">
          <h2>Numbers that speak for us.</h2>
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <div key={i} className="rv" style={{ '--d': s.delay }}>
              <strong data-count={s.count} data-suf={s.suf}>0</strong>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
