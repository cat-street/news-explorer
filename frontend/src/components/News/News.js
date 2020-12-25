import { useEffect, useRef } from 'react';
import Container from '../Container/Container';
import NewsCard from '../NewsCard/NewsCard';
import './News.css';
import Button from '../Button/Button';

function News({
  newsData, currentData, setData, isLoggedIn, children,
}) {
  const counter = useRef(3);

  const showMore = () => {
    counter.current += 3;
  };

  useEffect(() => {
    setData(newsData.slice(0, counter.current));
    return () => {
      setData([]);
    };
  }, [newsData, setData, counter]);

  return (
    <section className="news">
      <Container>
        {children}
        <ul className="news__grid">
          {currentData.map((card, ind) => (
            <NewsCard key={ind} isLoggedIn={isLoggedIn} {...card} />
          ))}
        </ul>
        {(newsData.length > 3 && counter.current < 100) && (
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
