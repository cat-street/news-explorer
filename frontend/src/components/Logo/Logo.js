import './Logo.css';

function Logo({ className = '' }) {
  return (
    <div className={`logo ${className}`}>
      NewsExplorer
    </div>
  );
}

export default Logo;
