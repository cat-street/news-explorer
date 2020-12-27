import { useContext, useEffect } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import getKeywords from '../../utils/getKeywords';
import './SavedNewsHeader.css';

function SavedNewsHeader({ savedData, keywords, setKeywords }) {
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setKeywords(getKeywords(savedData));
  }, [setKeywords, savedData]);

  return (
    <div className="saved-header">
      <p className="saved-header__sub-title">Сохранённые статьи</p>
      <SectionTitle
        mixinClass="saved-header__title"
        title={
          `${currentUser.name}, у вас ${savedData.length} сохраненных статей`
        }
      />
      <p className="saved-header__keywords-text">
        По ключевым словам:{' '}
        {keywords[0] && (<span className="saved-header__keyword">{keywords[0]}</span>)}
        {keywords[1] && (<>, <span className="saved-header__keyword">{keywords[1]}</span></>)}
        {keywords[2] && (<> и <span className="saved-header__keyword">{keywords[2]}</span></>)}
      </p>
    </div>
  );
}

export default SavedNewsHeader;
