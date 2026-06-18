import { Link } from 'react-router-dom';
import './Footer.css';

const LINKS = [
  { heading: 'Explore', items: [
    { to: '/',          label: 'Home' },
    { to: '/about',     label: 'About Us' },
    { to: '/dashboard', label: 'All Stays' },
  ]},
  { heading: 'Stay', items: [
    { to: '/', label: 'Homestays' },
    { to: '/', label: 'Farm Retreats' },
    { to: '/', label: 'Tribal Villages' },
  ]},
  { heading: 'Help', items: [
    { to: '/', label: 'How It Works' },
    { to: '/', label: 'Host Your Home' },
    { to: '/', label: 'Contact' },
  ]},
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span aria-hidden="true">🌿</span> VanaMitra
          </Link>
          <p className="footer__tagline">
            Regenerative travel that gives back to the land and the people who tend it.
          </p>
          <div className="footer__socials" aria-label="Social media">
            {['𝕏','in','▶','📷'].map(s => (
              <span key={s} className="footer__social">{s}</span>
            ))}
          </div>
        </div>

        {LINKS.map(group => (
          <div key={group.heading} className="footer__col">
            <h4 className="footer__heading">{group.heading}</h4>
            <ul>
              {group.items.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} VanaMitra. All rights reserved.</span>
          <span className="footer__badges">
            <span className="footer__badge">🌱 Carbon Neutral</span>
            <span className="footer__badge">🤝 Fair Host Policy</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
