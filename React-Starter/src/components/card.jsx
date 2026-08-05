import './Card.css';

export default function Card({ title, category, description, tags }) {
  return (
    <div className="card">
      <span className="card-category">{category}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      
      <div className="card-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}