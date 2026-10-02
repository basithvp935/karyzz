export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <a href="#top" className="logo" aria-label="Karyz home">
          <img
            src="/log.png"
            alt="Karyz"
            className="footer-logo-img"
            style={{ height: '34px', width: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </a>
        <div className="fl">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#start">Contact</a>
        </div>
        <span>© 2026 Karyz. All rights reserved.</span>
      </div>
    </footer>
  );
}
