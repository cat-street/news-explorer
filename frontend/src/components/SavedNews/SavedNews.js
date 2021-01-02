import { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import News from '../News/News';
import './SavedNews.css';

function SavedNews({
  setTheme,
  savedData,
  getArticles,
  removeArticle,
  keywords,
  setKeywords,
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
      <SavedNewsHeader
        savedData={savedData}
        keywords={keywords}
        setKeywords={setKeywords}
      />
      <News currentData={savedData} removeArticle={removeArticle} />
    </main>
  );
}

export default SavedNews;
