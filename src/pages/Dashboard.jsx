import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card   from '../components/Card';
import './InnerPage.css';
import './Dashboard.css';

const ALL_STAYS = [
  { emoji:'🏡', title:'Nilgiri Mist Cottage',   location:'Ooty, TN',       tag:'Homestay',   tagColor:'green', description:'Cardamom estate stay with the Krishnaswamy family. Forest walks & spice harvesting.',   price:'2,400', rating:'4.9' },
  { emoji:'🌾', title:'Konkan Rice Farm',         location:'Ratnagiri, MH',  tag:'Agri-Stay',  tagColor:'amber', description:'Paddy transplanting, kokum picking, and Malvani coastal cooking with a farming family.', price:'1,800', rating:'4.8' },
  { emoji:'🐄', title:'Brahmaputra Dairy Retreat',location:'Jorhat, AS',     tag:'Agri-Allied',tagColor:'soil',  description:'Butter-making, bamboo-boat rowing, and an Assamese feast in the evening.',               price:'2,100', rating:'4.9' },
  { emoji:'🍵', title:'Munnar Tea Estate',        location:'Munnar, KL',     tag:'Eco-Tour',   tagColor:'green', description:'Walk the terraced tea rows, pluck, and cup your own batch in a Victorian tasting room.',  price:'3,200', rating:'5.0' },
  { emoji:'🐝', title:'Sundarbans Honey Village', location:'Gosaba, WB',     tag:'Community',  tagColor:'amber', description:'Mangrove creek boat, honey-hunter mornings, and a bamboo stilt house by the river.',    price:'2,700', rating:'4.7' },
  { emoji:'🌵', title:'Thar Desert Farm',         location:'Barmer, RJ',     tag:'Agri-Stay',  tagColor:'soil',  description:'Drought-resistant millet farming, block printing, and khabar stargazing terraces.',       price:'1,600', rating:'4.8' },
  { emoji:'🎋', title:'Sikkim Bamboo Village',    location:'Ravangla, SK',   tag:'Eco-Tour',   tagColor:'green', description:'Organic cardamom gardens, Buddhist monastery visit, and a handwoven stay in bamboo huts.', price:'2,900', rating:'4.9' },
  { emoji:'🫚', title:'Kutch Salt Farm',          location:'Bhuj, GJ',       tag:'Agri-Allied',tagColor:'soil',  description:'Witness ancient agaria salt-making and sleep under a vast white Rann sky.',                price:'1,500', rating:'4.6' },
];

const STATS = [
  { icon:'🏡', value:'120+', label:'Host Families' },
  { icon:'🗺️', value:'18',   label:'States' },
  { icon:'⭐', value:'4.9',  label:'Avg Rating' },
  { icon:'🌱', value:'340+', label:'Hectares Protected' },
];

const FILTERS = ['All','Homestay','Agri-Stay','Agri-Allied','Eco-Tour','Community'];

export default function Dashboard() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main inner-page">

        <section className="inner-hero inner-hero--soil">
          <div className="container">
            <p className="inner-hero__eyebrow">All Listings</p>
            <h1 className="inner-hero__title">Explore Every Stay</h1>
            <p className="inner-hero__sub">Browse our full collection of verified rural homestays and agri-experiences across India.</p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="dash-stats-bar">
          <div className="container dash-stats-inner">
            {STATS.map(s => (
              <div key={s.label} className="dash-stat">
                <span className="dash-stat__icon">{s.icon}</span>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Filter chips */}
        <section className="inner-section">
          <div className="container">
            <div className="dash-filters" role="group" aria-label="Filter stays by type">
              {FILTERS.map((f, i) => (
                <button key={f} className={`dash-filter-chip${i === 0 ? ' active' : ''}`}>{f}</button>
              ))}
            </div>
            <div className="dash-grid">
              {ALL_STAYS.map(stay => (
                <Card key={stay.title} {...stay} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
