import { useTranslation } from 'react-i18next';
import Container from '../Container/Container';
import SearchForm from '../SearchForm/SearchForm';
import './Hero.css';

function Hero(props) {
  const { t } = useTranslation('main');

  return (
    <section className="hero">
      <Container mixinClass="hero__container">
        <div className="hero__title">
          <h1 className="hero__title-heading">
            {t('hero.title')}
          </h1>
          <p className="hero__title-description">
            {t('hero.description')}
          </p>
        </div>
        <SearchForm {...props} />
      </Container>
    </section>
  );
}

export default Hero;
