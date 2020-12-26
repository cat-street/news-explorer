import { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import backToTop from '../../helpers/backToTop';
import Logo from '../Logo/Logo';
import './Header.css';

function Header(props) {
  const {
    theme, menuOpened, openedPopup, reset,
  } = props;
  const header = useRef();

  const handleLogoClick = () => {
    reset();
    backToTop();
  };

  const fillHeader = useCallback(() => {
    if (window.scrollY > 56) {
      header.current.classList.remove('header_transparent');
    } else if (window.scrollY < 56) {
      header.current.classList.add('header_transparent');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', fillHeader);
    return () => window.removeEventListener('scroll', fillHeader);
  }, [fillHeader]);

  return (
    <header
      ref={header}
      className={`header header_theme_${theme} ${
        menuOpened ? '' : 'header_transparent'
      }`}
    >
      <Container mixinClass="header__container">
        <Link className="header__logo" to="/" onClick={handleLogoClick}>
          <Logo />
        </Link>
        {!openedPopup && <Hamburger {...props} />}
        <Navigation {...props} />
      </Container>
    </header>
  );
}

export default Header;
