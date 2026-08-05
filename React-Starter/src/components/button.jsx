import './Button.css';

export default function Button({ label, onClick, variant = 'primary' }) {
  return (
    <button 
      className={`custom-button ${variant}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}