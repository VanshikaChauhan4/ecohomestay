import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome to VanaMitra">
      {/* Decorative SVG landscape */}
      <div className="hero__landscape" aria-hidden="true">
        <svg viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Sky gradient */}
          <defs>
            <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#1E3A2F"/>
              <stop offset="100%" stopColor="#2D5E40"/>
            </linearGradient>
            <linearGradient id="hill1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2D5E40"/>
              <stop offset="100%" stopColor="#1E3A2F"/>
            </linearGradient>
            <linearGradient id="hill2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A7C59"/>
              <stop offset="100%" stopColor="#2D5E40"/>
            </linearGradient>
          </defs>
          <rect width="1440" height="520" fill="url(#sky)"/>
          {/* Stars */}
          {[180,320,540,700,820,960,1100,1260,1380,90,430,640,880,1030,1200].map((x,i) => (
            <circle key={i} cx={x} cy={20 + (i*17)%80} r={i%3===0?1.5:1} fill="#E8D9B5" opacity={0.5 + (i%4)*0.12}/>
          ))}
          {/* Moon */}
          <circle cx="1280" cy="80" r="38" fill="#E8D9B5" opacity="0.15"/>
          <circle cx="1295" cy="72" r="30" fill="#1E3A2F"/>
          {/* Back hills */}
          <path d="M0 360 Q180 200 360 300 Q540 400 720 280 Q900 160 1080 290 Q1260 400 1440 320 L1440 520 L0 520Z" fill="url(#hill1)" opacity="0.7"/>
          {/* Mid hills */}
          <path d="M0 420 Q200 320 400 380 Q600 440 800 360 Q1000 280 1200 370 Q1320 420 1440 400 L1440 520 L0 520Z" fill="url(#hill2)"/>
          {/* Trees silhouettes */}
          {[60,140,240,340,440,960,1060,1160,1260,1360].map((x,i) => (
            <g key={i} transform={`translate(${x},${i%2===0?330:350})`}>
              <rect x="-3" y="40" width="6" height="30" fill="#1E3A2F"/>
              <polygon points="0,-10 -18,40 18,40" fill="#1E3A2F"/>
              <polygon points="0,-32 -13,12 13,12" fill="#2D5E40"/>
            </g>
          ))}
          {/* Foreground ground */}
          <path d="M0 460 Q360 440 720 455 Q1080 470 1440 450 L1440 520 L0 520Z" fill="#1a3025"/>
        </svg>
      </div>

      <div className="hero__content container">
        <p className="hero__eyebrow">Homestay & Eco-tourism · Agri-Allied Experiences</p>
        <h1 className="hero__title">
          Sleep where the<br/>
          <em>forest breathes</em>
        </h1>
        <p className="hero__subtitle">
          Authentic village homestays, farm-to-table living, and regenerative travel
          rooted in India's rural heartlands.
        </p>
        <div className="hero__actions">
          <Link to="/dashboard" className="hero__btn hero__btn--primary">Explore Stays</Link>
          <Link to="/about"     className="hero__btn hero__btn--ghost">Our Story</Link>
        </div>

        <div className="hero__stats">
          {[
            { value: '120+', label: 'Host Families' },
            { value: '18',   label: 'States Covered' },
            { value: '4.9★', label: 'Avg. Guest Rating' },
          ].map(s => (
            <div key={s.label} className="hero__stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <svg width="14" height="24" viewBox="0 0 14 24"><rect x="5" y="2" width="4" height="4" rx="2" fill="currentColor" opacity="0.7"/></svg>
      </div>
    </section>
  );
}
