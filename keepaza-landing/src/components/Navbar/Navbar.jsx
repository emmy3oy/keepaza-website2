
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          <img src="/logo.png" alt="Keepaza logo" />
          <span>Keepaza</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
