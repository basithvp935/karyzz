'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/?text=Hi%20Karyz%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20B2B%20distribution%20platform"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-tooltip">Chat with us</span>
      <div className="whatsapp-icon-circle">
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.2-.3-.5a11.6 11.6 0 1 1 9.8 5.5zm6.4-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1.1-1.1 1.3-.4.2-.7 0a9.2 9.2 0 0 1-2.7-1.7 10.1 10.1 0 0 1-1.9-2.3c-.2-.3 0-.5.1-.7s.3-.4.5-.6l.3-.5a1.4 1.4 0 0 0 0-.6c-.1-.2-.8-2-1.1-2.7s-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.2 17.2 0 0 0 6.6 5.8 22.8 22.8 0 0 0 2.2.8 5.3 5.3 0 0 0 2.4.2 4 4 0 0 0 2.6-1.8 3.2 3.2 0 0 0 .2-1.8c-.1-.3-.4-.4-.7-.6z" />
        </svg>
      </div>
      <span className="whatsapp-pulse"></span>
    </a>
  );
}
