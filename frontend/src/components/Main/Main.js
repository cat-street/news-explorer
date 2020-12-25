import { useEffect } from 'react';
import Hero from '../Hero/Hero';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import SectionTitle from '../SectionTitle/SectionTitle';
import News from '../News/News';
import About from '../About/About';
import mockApiData from '../../utils/mockApiData';
import './Main.css';

function Main({
  newsData,
  setNews,
  // currentData,
  setData,
  isLoggedIn,
  searchStatus,
  setSearch,
}) {
  useEffect(() => {
    setData(mockApiData.slice(0, 6));
    return () => {
      setData([]);
    };
  }, [setData]);

  return (
    <main className="main">
      <Hero setSearch={setSearch} setNews={setNews} />
      {searchStatus === 'searching' && <Preloader />}
      {searchStatus === 'no results' && <NoResults />}
      {searchStatus === 'results' && (
        <News data={newsData} isLoggedIn={isLoggedIn} more={true}>
          <SectionTitle mixinClass="main__title" title="Результаты поиска" />
        </News>
      )}
      <About />
    </main>
  );
}

export default Main;
