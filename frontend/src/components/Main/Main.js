import Hero from '../Hero/Hero';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import SectionTitle from '../SectionTitle/SectionTitle';
import News from '../News/News';
import About from '../About/About';
import './Main.css';

function Main({
  setNews,
  searchStatus,
  setSearch,
  ...props
}) {
  return (
    <main className="main">
      <Hero setSearch={setSearch} setNews={setNews} />
      {searchStatus === 'searching' && <Preloader />}
      {searchStatus === 'no results' && <NoResults />}
      {searchStatus === 'results' && (
        <News {...props}>
          <SectionTitle mixinClass="main__title" title="Результаты поиска" />
        </News>
      )}
      <About />
    </main>
  );
}

export default Main;
