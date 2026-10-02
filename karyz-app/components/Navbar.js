export default function Navbar() {
  return (
    <nav id="nav">
      <div className="in">
        <a href="#top" className="logo" aria-label="Karyz home">
          <img
            src="/log.png"
            alt="Karyz"
            className="nav-logo-img"
            style={{ height: '36px', width: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </a>
        <div className="links">
          <a href="#top">Home</a>
          <a href="#about">About Us</a>
          <a href="#features">Features</a>
          <a href="#how">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#start" className="btn c sm">Get started</a>
      </div>
    </nav>
  );
}
