import "./Hero.css";
import searchIcon from "../../assets/keepaza.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Send Funds
          <br />
          by Username.
        </h1>

        <div className="hero-right">
          <div className="illustration-card">
            <img src={searchIcon} alt="Keepaza App" className="search-icon" />
          </div>
        </div>

        <p className="hero-description">
          One trusted profile for freelancers, merchants, and
          creators — get paid, send invoices, and showcase
          your products and services.
        </p>

        <div className="navbar-downloads">
          <a href="#" className="store-button app-store-button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M17.1 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.7 1.1 1.5 2.3 2.6 2.3 1 0 1.4-.7 2.8-.7 1.3 0 1.7.7 2.8.7 1.1 0 1.8-1.1 2.5-2.2.8-1.2 1.1-2.4 1.1-2.5-.1 0-2.2-.9-2.2-4zM14.8 6.2c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.7 1.3-.6.6-1.1 1.7-1 2.6 1 .1 2.1-.5 2.8-1.2z"
              />
            </svg>
            <span className="store-text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
          </a>

          <a href="#" className="store-button play-store-button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#34A853" d="M3.5 2.7 14 12 3.5 21.3z" />
              <path fill="#4285F4" d="m3.5 21.3 13-7.2-2.5-2.1z" />
              <path fill="#FBBC04" d="m3.5 2.7 13 7.2L14 12z" />
              <path fill="#EA4335" d="m16.5 9.9 3.1 1.7c1 .5 1 1.3 0 1.8l-3.1 1.7-2.5-2.1z" />
            </svg>
            <span className="store-text">
              <small>GET IT ON</small>
              <strong>Google Play</strong>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;