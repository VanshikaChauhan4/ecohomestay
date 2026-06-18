import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './InnerPage.css';

const TEAM = [
  { name: 'Vanshika chauhan',     role: 'Co-founder & CEO',  emoji: '🌿', bio: 'Former conservationist, born in Wayanad.' },
];

const VALUES = [
  { icon: '🏡', title: 'Host-First',      desc: 'Hosts keep 85% of every booking. Full stop.' },
  { icon: '🌍', title: 'Land Positive',   desc: 'We measure regeneration, not just carbon offsets.' },
  { icon: '🪴', title: 'Slow Travel',     desc: 'Minimum 2-night stays so you actually connect.' },
  { icon: '📖', title: 'Cultural Honesty',desc: 'No performance tourism. Just real daily life.' },
];

export default function About() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main inner-page">

        {/* Page Header */}
        <section className="inner-hero inner-hero--fern">
          <div className="container">
            <p className="inner-hero__eyebrow">Our Story</p>
            <h1 className="inner-hero__title">We're building a different kind of travel company.</h1>
            <p className="inner-hero__sub">
              VanaMitra was born from a simple frustration: the most extraordinary places in India — the fog-soaked hills, the paddied deltas, the desert oases — were invisible to travellers chasing Instagram itineraries.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="inner-section">
          <div className="container inner-two-col">
            <div className="inner-prose">
              <h2>Why VanaMitra?</h2>
              <p>
                <em>Vana</em> means forest in Sanskrit. <em>Mitra</em> means friend. We exist to connect travellers with the custodians of India's rural landscapes — not as observers, but as temporary community members.
              </p>
              <p>
                Rural India houses 65% of the population but captures less than 8% of domestic tourism revenue. We think that's wrong. Our model channels money directly into host households while building a constituency of people who understand, and therefore protect, these places.
              </p>
            </div>
            <div className="inner-stat-stack">
              {[
                { value: '₹2.4 Cr', sub: 'paid to host families in 2024' },
                { value: '91%',     sub: 'of guests return within 2 years' },
                { value: '340+',    sub: 'hectares under active protection' },
              ].map(s => (
                <div key={s.sub} className="stat-block">
                  <strong>{s.value}</strong>
                  <span>{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <h2 className="inner-centered-h2">What we stand for</h2>
            <div className="values-grid">
              {VALUES.map(v => (
                <div key={v.title} className="value-card">
                  <span className="value-card__icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="inner-section">
          <div className="container">
            <h2 className="inner-centered-h2">The Team</h2>
            <div className="team-grid">
              {TEAM.map(t => (
                <div key={t.name} className="team-card">
                  <div className="team-card__avatar">{t.emoji}</div>
                  <h3>{t.name}</h3>
                  <p className="team-card__role">{t.role}</p>
                  <p className="team-card__bio">{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
