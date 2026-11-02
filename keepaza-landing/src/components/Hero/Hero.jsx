import "./Hero.css";
import searchIcon from "../../assets/keepaza.png";

function Hero() {

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Send Funds
            <br />
            by Username.
          </h1>

          <p className="hero-description">
            One trusted profile for freelancers, merchants, and
            creators — get paid, send invoices, and showcase
            your products and services.
          </p>

            <div className="activity-card">
            <div className="activity-avatar">E</div>
            <p>
              <strong>Emeka S.</strong>{" "}
              <span>from Osun linked their bank</span>
            </p>
            <small>3s ago</small>
          </div>
          
        </div>
        
        <div className="hero-right">
          <div className="illustration-card">
            <img src={searchIcon} alt="Search" className="search-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
