import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero   from '../components/Hero';
import Card   from '../components/Card';
import Footer  from '../components/Footer';
import { Loader, useToast } from '../components/ui';
import './Home.css';

const HOW = [
  { icon: '🔍', step: 'Discover', desc: 'Browse verified host families across 18 Indian states — filter by region, activity, or season.' },
  { icon: '💬', step: 'Connect',  desc: "Chat directly with hosts. Ask about crops, rituals, local festivals, and what's in season." },
  { icon: '🛖', step: 'Arrive',   desc: "Travel light. Your host provides meals, experiences, and stories you won't find on any itinerary." },
  { icon: '🌱', step: 'Give Back',desc: "A portion of every booking goes to the host community's land-care fund." },
];

export default function Home() {
  const toast = useToast();
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/homestays')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load stays');
        return res.json();
      })
      .then((data) => {
        setStays(data.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.show(err.message || 'Could not load stays. Please try again.', { type: 'error' });
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main">
        <Hero />

        {/* ── Featured Stays Grid ── */}
        <section className="section section--stays">
          <div className="container">
            <div className="section__header">
              <p className="section__eyebrow">Curated Listings</p>
              <h2 className="section__title">Featured Stays & Experiences</h2>
              <p className="section__sub">
                Every listing is personally vetted by our field team. No hotels, no resorts — only homes.
              </p>
            </div>

            {loading ? (
              <div className="show-row show-row--center" style={{ padding: '48px 0' }}>
                <Loader variant="spinner" size="lg" label="Loading stays…" />
              </div>
            ) : (
              <div className="card-grid">
                {stays.map((stay) => (
                  <Card
                    key={stay.id}
                    emoji={stay.emoji}
                    title={stay.name}
                    location={stay.location}
                    tag={stay.tag}
                    tagColor={stay.tagColor}
                    description={stay.description}
                    price={stay.pricePerNight.toLocaleString()}
                    rating={stay.rating}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="section section--how">
          <div className="container">
            <div className="section__header">
              <p className="section__eyebrow">The Process</p>
              <h2 className="section__title">Simple. Soulful. Sustainable.</h2>
            </div>
            <div className="how-grid">
              {HOW.map((h, i) => (
                <div key={h.step} className="how-card">
                  <div className="how-card__number">{String(i + 1).padStart(2, '0')}</div>
                  <div className="how-card__icon">{h.icon}</div>
                  <h3>{h.step}</h3>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="section section--cta">
          <div className="container cta-inner">
            <div className="cta-text">
              <h2>Are you a rural host family?</h2>
              <p>Join VanaMitra and share your land, food, and way of life with responsible travellers from across India and the world.</p>
            </div>
            <a href="/login" className="cta-btn">List Your Home →</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}