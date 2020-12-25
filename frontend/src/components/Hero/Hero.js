import Container from '../Container/Container';
import SearchForm from '../SearchForm/SearchForm';
import './Hero.css';

function Hero(props) {
  return (
    <section className="hero">
      <Container mixinClass="hero__container">
        <div className="hero__title">
          <h1 className="hero__title-heading">
            Что творится в мире?
          </h1>
          <p className="hero__title-description">
            Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
          </p>
        </div>
        <SearchForm {...props} />
      </Container>
    </section>
  );
}

export default Hero;
