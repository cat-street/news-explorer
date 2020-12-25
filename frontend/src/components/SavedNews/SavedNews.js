import { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import News from '../News/News';
import mockData from '../../utils/mockData';
import './SavedNews.css';

function SavedNews({ setTheme }) {
  useEffect(() => {
    setTheme('light');
    return () => {
      setTheme('dark');
    };
  }, [setTheme]);

  return (
    <main className="saved-news">
      <SavedNewsHeader />
      <News data={mockData} />
    </main>
  );
}

export default SavedNews;
