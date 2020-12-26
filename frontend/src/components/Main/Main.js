import { useEffect, useRef } from 'react';
import Hero from '../Hero/Hero';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import SectionTitle from '../SectionTitle/SectionTitle';
import News from '../News/News';
import About from '../About/About';
import './Main.css';

function Main({
  newsData,
  setNews,
  currentData,
  setData,
  searchStatus,
  setSearch,
  getNews,
  ...props
}) {
  const counter = useRef(3);

  const showMore = () => {
    counter.current += 3;
    setData(newsData.slice(0, counter.current));
  };

  useEffect(() => {
    setSearch('');
    return () => {
      setNews([]);
    };
  }, [setSearch, setNews]);

  return (
    <main className="main">
      <Hero setSearch={setSearch} setNews={setNews} getNews={getNews} />
      {searchStatus === 'searching' && <Preloader />}
      {searchStatus === 'no results' && <NoResults />}
      {searchStatus === 'results' && (
        <News
          newsData={newsData}
          currentData={currentData}
          counter={counter.current}
          showMore={showMore}
          {...props}
        >
          <SectionTitle mixinClass="main__title" title="Результаты поиска" />
        </News>
      )}
      <About />
    </main>
  );
}

export default Main;
