import { NavLink } from 'react-router-dom';
import backToTop from '../../helpers/backToTop';
import Button from '../Button/Button';
import darkExitIcon from '../../images/exit-dark.svg';
import lightExitIcon from '../../images/exit-light.svg';
import './Navigation.css';

function Navigation({
  theme,
  menuOpened,
  toggleMenu,
  isLoggedIn,
  openPopup,
  logout,
}) {
  const hideMenu = () => {
    toggleMenu(false);
    backToTop();
  };

  const handleLoginClick = () => {
    if (isLoggedIn) logout();
    else {
      toggleMenu(false);
      openPopup('login');
    }
  };

  return (
    <nav
      className={`navigation navigation_theme_${theme} ${
        menuOpened ? 'navigation_visible' : ''
      }`}
    >
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            to="/"
            exact
            className="navigation__link"
            onClick={hideMenu}
            activeClassName="navigation__link_active"
          >
            Главная
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className="navigation__item">
            <NavLink
              to="/saved-news"
              className="navigation__link"
              onClick={hideMenu}
              activeClassName="navigation__link_active"
            >
              Сохраненные статьи
            </NavLink>
          </li>
        )}
      </ul>
      <Button
        buttonClass={`button button_type_text navigation__button navigation__button_theme_${theme}`}
        onClick={handleLoginClick}
      >
        {isLoggedIn ? (
          <span className="button__logged-in">
            <span className="button__title">Мария-Антуанетта</span>
            <img
              className="button__exit-icon"
              src={theme === 'light' ? darkExitIcon : lightExitIcon}
              alt="Выйти"
            />
          </span>
        ) : (
          'Авторизоваться'
        )}
      </Button>
    </nav>
  );
}

export default Navigation;
