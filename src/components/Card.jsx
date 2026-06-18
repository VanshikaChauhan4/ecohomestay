import './Card.css';

export default function Card({ emoji, title, location, tag, tagColor, description, price, rating, nights }) {
  return (
    <article className="card">
      <div className="card__visual">
        <span className="card__emoji" aria-hidden="true">{emoji}</span>
        <span className={`card__tag card__tag--${tagColor || 'green'}`}>{tag}</span>
      </div>

      <div className="card__body">
        <div className="card__meta">
          <span className="card__location">📍 {location}</span>
          <span className="card__rating">⭐ {rating}</span>
        </div>

        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>

        <div className="card__footer">
          <div className="card__price">
            <strong>₹{price}</strong>
            <span>/ night</span>
          </div>
          <button className="card__btn">
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}
