import './Navbar.css';

export default function Navbar({ brandName, links }) {
  return (
    <nav className="navbar">
      <h2 className="navbar-brand">{brandName}</h2>
      <div className="navbar-links">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="navbar-item">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}