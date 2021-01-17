import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CurrentUserContext from '../../contexts/CurrentUserContext';
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
  signOut,
  setLanguage,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { t, i18n } = useTranslation('common');

  const hideMenu = () => {
    toggleMenu(false);
    backToTop();
  };

  const handleLoginClick = () => {
    if (isLoggedIn) signOut();
    else {
      toggleMenu(false);
      openPopup('login');
    }
  };

  const handleLanguageClick = () => {
    const lang = i18n.language === 'en-US' ? 'ru-RU' : 'en-US';
    i18n.changeLanguage(lang);
    setLanguage(lang);
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
            {t('navigation.home')}
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
              {t('navigation.bookmarks')}
            </NavLink>
          </li>
        )}
        <li className="navigation__item">
          <button className="button navigation__language-button" onClick={handleLanguageClick}>
            {currentUser.lang.slice(0, 2)}
          </button>
        </li>
      </ul>
      <Button
        type="button"
        buttonClass={`button button_type_text navigation__button navigation__button_theme_${theme}`}
        onClick={handleLoginClick}
      >
        {isLoggedIn ? (
          <span className="button__logged-in">
            <span className="button__title">{currentUser.name}</span>
            <img
              className="button__exit-icon"
              src={theme === 'light' ? darkExitIcon : lightExitIcon}
              alt={t('buttons.logout')}
            />
          </span>
        ) : t('buttons.auth')}
      </Button>
    </nav>
  );
}

export default Navigation;
