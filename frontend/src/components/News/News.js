import Container from '../Container/Container';
import NewsCard from '../NewsCard/NewsCard';
import './News.css';
import Button from '../Button/Button';

function News({
  data, more, isLoggedIn, children,
}) {
  return (
    <section className="news">
      <Container>
        { children }
        <ul className="news__grid">
          {data.map((card, ind) => (
            <NewsCard
              key={ind}
              isLoggedIn={isLoggedIn}
              {...card}
            />
          ))}
        </ul>
        {more && (
          <Button type="button" buttonClass="button_type_text news__button">
            Показать еще
          </Button>
        )}
      </Container>
    </section>
  );
}

export default News;
