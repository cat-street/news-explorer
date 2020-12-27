import Container from '../Container/Container';
import NewsCard from '../NewsCard/NewsCard';
import './News.css';
import Button from '../Button/Button';

function News({
  newsData = [],
  currentData,
  isLoggedIn,
  counter,
  showMore,
  children,
}) {
  return (
    <section className="news">
      <Container>
        {children}
        <ul className="news__grid">
          {currentData.map((card, ind) => (
            <NewsCard key={card._id || ind} isLoggedIn={isLoggedIn} {...card} />
          ))}
        </ul>
        {newsData.length > 3 && counter < newsData.length && (
          <Button
            type="button"
            buttonClass="button_type_text news__button"
            onClick={showMore}
          >
            Показать еще
          </Button>
        )}
      </Container>
    </section>
  );
}

export default News;
