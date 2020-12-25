import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import backToTop from '../../helpers/backToTop';
import gitIcon from '../../images/icon-git.svg';
import linkedinIcon from '../../images/icon-in.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container mixinClass="footer__container">
        <nav className="footer__links">
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <Link to="/" onClick={backToTop} className="footer__menu-link">
                Главная
              </Link>
            </li>
            <li className="footer__menu-item">
              <a
                href="https://praktikum.yandex.ru/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer__menu-link"
              >
                Яндекс.Практикум
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            <li>
              <a
                href="https://github.com/cat-street"
                target="_blank"
                rel="noreferrer noopener"
                className="footer__social-link"
              >
                <img src={gitIcon} alt="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cat-logic/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer__social-link">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">
          © 2020 CatLogic, Powered by News API
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
