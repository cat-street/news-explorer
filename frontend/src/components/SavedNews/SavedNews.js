import { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import News from '../News/News';
import mockData from '../../utils/mockData';
import './SavedNews.css';

function SavedNews({ setTheme, savedData, setSaved }) {
  useEffect(() => {
    setTheme('light');
    return () => {
      setTheme('dark');
    };
  }, [setTheme]);

  useEffect(() => {
    setSaved(mockData);
  }, [setSaved]);

  return (
    <main className="saved-news">
      <SavedNewsHeader savedData={savedData} />
      <News currentData={savedData} />
    </main>
  );
}

export default SavedNews;
