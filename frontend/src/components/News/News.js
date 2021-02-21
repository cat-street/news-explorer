import { useTranslation } from 'react-i18next';
import Container from '../Container/Container';
import NewsCard from '../NewsCard/NewsCard';
import './News.css';
import Button from '../Button/Button';

function News({
  newsData = [],
  currentData,
  counter,
  showMore,
  children,
  ...props
}) {
  const { t } = useTranslation('common');

  return (
    <section className="news">
      <Container>
        {children}
        <ul className="news__grid">
          {currentData.map((card, ind) => (
            <NewsCard
              key={card._id || ind}
              card={card}
              { ...props }
            />
          ))}
        </ul>
        {newsData.length > 3 && counter < newsData.length && (
          <Button
            type="button"
            buttonClass="button_type_text news__button"
            onClick={showMore}
          >
            {t('buttons.showMore')}
          </Button>
        )}
      </Container>
    </section>
  );
}

export default News;
