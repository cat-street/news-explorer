import './Hamburger.css';

function Hamburger({ theme, menuOpened, toggleMenu }) {
  const handleBurgerClick = () => {
    toggleMenu(!menuOpened);
  };

  return (
    <div
      className={`hamburger hamburger_theme_${theme} ${
        menuOpened ? 'hamburger_crossed' : ''
      }`}
      onClick={handleBurgerClick}
    >
      <div className="hamburger__bar"></div>
    </div>
  );
}

export default Hamburger;
