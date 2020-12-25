import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import './About.css';
import author from '../../images/author.jpg';

function About() {
  return (
    <section className="about">
      <Container mixinClass="about__container">
        <img className="about__avatar" src={author} alt="Автор проекта" />
        <div className="about__description">
          <SectionTitle mixinClass="about__title" title="Об авторе" />
          <p className="about__text">
            Этот проект написал талантливый кот Саймон, первый кот-разработчик в
            мире. Саймон владеет технологиями веб-разработки в широком диапазоне
            на стороне фронт- и бэкенда, такими, например, как JavaScript,
            React, Node, Express, MongoDB, но при этом мало ест и не
            требователен к условиям работы.
          </p>
          <p className="about__text">
            За кошачьи годы обучения в Яндекс.Практикуме Саймон усвоил суровые
            истины мира технологий, и теперь готов помочь потенциальным
            заказчикам, взяв контроль над их офисом свои лапы.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
