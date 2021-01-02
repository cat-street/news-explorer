import { useTranslation } from 'react-i18next';
import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import './About.css';
import author from '../../images/author.jpg';

function About() {
  const { t } = useTranslation('main');

  return (
    <section className="about">
      <Container mixinClass="about__container">
        <img className="about__avatar" src={author} alt={t('about.author')} />
        <div className="about__description">
          <SectionTitle mixinClass="about__title" title={t('about.title')} />
          <p className="about__text">
            {t('about.description1')}
          </p>
          <p className="about__text">
            {t('about.description2')}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
