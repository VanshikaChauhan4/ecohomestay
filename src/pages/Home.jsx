import Navbar from '../components/Navbar';
import Hero   from '../components/Hero';
import Card   from '../components/Card';
import Footer  from '../components/Footer';
import './Home.css';

const STAYS = [
  {
    emoji: '🏡',
    title: 'Nilgiri Mist Cottage',
    location: 'Ooty, Tamil Nadu',
    tag: 'Homestay',
    tagColor: 'green',
    description: 'Wake to cloud-wrapped eucalyptus forest. Stay with the Krishnaswamy family in their 100-year-old estate, harvesting cardamom at dawn.',
    price: '2,400',
    rating: '4.9',
  },
  {
    emoji: '🌾',
    title: 'Konkan Rice Farm',
    location: 'Ratnagiri, Maharashtra',
    tag: 'Agri-Stay',
    tagColor: 'amber',
    description: 'Transplant paddy alongside Marathi farmers. Learn ancient sukata fish drying and feast on kokum-laced curries under mango groves.',
    price: '1,800',
    rating: '4.8',
  },
  {
    emoji: '🐄',
    title: 'Brahmaputra Dairy Retreat',
    location: 'Jorhat, Assam',
    tag: 'Agri-Allied',
    tagColor: 'soil',
    description: 'Craft handmade butter, bottle-feed calves, and row a bamboo boat through morning fog. A full immersion in Assamese rural life.',
    price: '2,100',
    rating: '4.9',
  },
  {
    emoji: '🍵',
    title: 'Munnar Tea Estate',
    location: 'Munnar, Kerala',
    tag: 'Eco-Tour',
    tagColor: 'green',
    description: "Walk tea-terraced hillsides, pluck alongside estate workers, and cup your own batch in the estate's Victorian-era tasting room.",
    price: '3,200',
    rating: '5.0',
  },
  {
    emoji: '🐝',
    title: 'Sundarbans Honey Village',
    location: 'Gosaba, West Bengal',
    tag: 'Community',
    tagColor: 'amber',
    description: 'Boat through mangrove creeks with honey-hunters. Contribute to tiger-corridor conservation while sleeping in a bamboo stilt house.',
    price: '2,700',
    rating: '4.7',
  },
  {
    emoji: '🌵',
    title: 'Thar Desert Farm',
    location: 'Barmer, Rajasthan',
    tag: 'Agri-Stay',
    tagColor: 'soil',
    description: 'Tend to drought-resistant millet, hand-block print textiles with local artisans, and stargaze from a khabar mud-brick terrace.',
    price: '1,600',
    rating: '4.8',
  },
];

const HOW = [
  { icon: '🔍', step: 'Discover', desc: 'Browse verified host families across 18 Indian states — filter by region, activity, or season.' },
  { icon: '💬', step: 'Connect',  desc: "Chat directly with hosts. Ask about crops, rituals, local festivals, and what's in season." },
  { icon: '🛖', step: 'Arrive',   desc: "Travel light. Your host provides meals, experiences, and stories you won't find on any itinerary." },
  { icon: '🌱', step: 'Give Back',desc: "A portion of every booking goes to the host community's land-care fund." },
];

export default function Home() {
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
            <div className="card-grid">
              {STAYS.map(stay => (
                <Card key={stay.title} {...stay} />
              ))}
            </div>
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
