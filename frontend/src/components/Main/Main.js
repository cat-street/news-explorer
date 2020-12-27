import { useRef } from 'react';
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
  ...props
}) {
  const counter = useRef(3);

  const showMore = () => {
    counter.current += 3;
    setData(newsData.slice(0, counter.current));
  };

  const resetCounter = () => {
    counter.current = 3;
  };

  return (
    <main className="main">
      <Hero resetCounter={resetCounter} {...props} />
      {searchStatus === 'searching' && <Preloader />}
      {searchStatus === 'no results' && <NoResults type="nothing" />}
      {searchStatus === 'error' && <NoResults type="error" />}
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
