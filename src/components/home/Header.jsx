import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  const closeMobile = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header className="header">
      <div className="container">

        {/* LOGO */}
        <div className="logo">🌌 AstroSite</div>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* NAV */}
        <nav className={`nav ${mobileOpen ? "nav-open" : ""}`}>

          <Link to="/" className={`nav-link ${isActive("/")}`} onClick={closeMobile}>
            Home
          </Link>

          <Link to="/categories" className={`nav-link ${isActive("/categories")}`} onClick={closeMobile}>
            Categories
          </Link>

          {/* DROPDOWN */}
          <div
            className="dropdown"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <span
              className="nav-link dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Explore ▾
            </span>

            <div
              className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              <Link to="/Books" className={isActive("/Books")} onClick={closeMobile}>Books</Link>
              <Link to="/Comets" className={isActive("/Comets")} onClick={closeMobile}>Comets</Link>
              <Link to="/Constellations" className={isActive("/Constellations")} onClick={closeMobile}>Constellations</Link>
              <Link to="/Planets" className={isActive("/Planets")} onClick={closeMobile}>Planets</Link>
              <Link to="/Observatories" className={isActive("/Observatories")} onClick={closeMobile}>Observatories</Link>
              <Link to="/Latest_Development" className={isActive("/Latest_Development")} onClick={closeMobile}>Latest</Link>
              <Link to="/Videos" className={isActive("/Videos")} onClick={closeMobile}>Videos</Link>
            </div>
          </div>

          <Link to="/About_contact" className={`nav-link ${isActive("/About_contact")}`} onClick={closeMobile}>
            About
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;