import { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import News from '../News/News';
import './SavedNews.css';

function SavedNews({
  setTheme, savedData, getArticles, removeArticle,
}) {
  useEffect(() => {
    setTheme('light');
    return () => {
      setTheme('dark');
    };
  }, [setTheme]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <main className="saved-news">
      <SavedNewsHeader savedData={savedData} />
      <News currentData={savedData} removeArticle={removeArticle} />
    </main>
  );
}

export default SavedNews;
