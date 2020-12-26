import { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import News from '../News/News';
import mockData from '../../utils/mockData';
import './SavedNews.css';

function SavedNews({
  setTheme, savedData, setSaved, reset,
}) {
  useEffect(() => {
    setTheme('light');
    return () => {
      setTheme('dark');
    };
  }, [setTheme]);

  useEffect(() => {
    reset();
    setSaved(mockData);
  }, [reset, setSaved]);

  return (
    <main className="saved-news">
      <SavedNewsHeader savedData={savedData} />
      <News currentData={savedData} />
    </main>
  );
}

export default SavedNews;
