import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/dashboard',label: 'Dashboard' },
  { to: '/login',    label: 'Login' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location              = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__leaf" aria-hidden="true">🌿</span>
          <span className="navbar__name">VanaMitra</span>
        </Link>

        <nav className={`navbar__links${open ? ' navbar__links--open' : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__link${location.pathname === to ? ' navbar__link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/login" className="navbar__cta">Book a Stay</Link>
        </nav>

        <button
          className={`navbar__hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="navbar__backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
      )}
    </header>
  );
}
