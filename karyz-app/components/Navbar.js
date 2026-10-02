export default function Navbar() {
  return (
    <nav id="nav">
      <div className="in">
        <a href="#top" className="logo" aria-label="Karyz home">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M10 6v28M10 22c8-2 12-8 14-16" stroke="#352A55" strokeWidth="5" strokeLinecap="round"/>
            <path d="M14 30c6 6 16 4 20-4" stroke="#CB5C27" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          Karyz
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
