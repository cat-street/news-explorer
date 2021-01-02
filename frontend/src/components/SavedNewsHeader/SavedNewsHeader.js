import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle/SectionTitle';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import getKeywords from '../../utils/getKeywords';
import './SavedNewsHeader.css';

function SavedNewsHeader({ savedData, keywords, setKeywords }) {
  const currentUser = useContext(CurrentUserContext);
  const { t } = useTranslation('main');

  useEffect(() => {
    setKeywords(getKeywords(savedData));
  }, [setKeywords, savedData]);

  return (
    <div className="saved-header">
      <p className="saved-header__sub-title">{t('bookmarks.subtitle')}</p>
      <SectionTitle
        mixinClass="saved-header__title"
        title={
          `${currentUser.name}, ${t('bookmarks.titlePart1')} ${
            savedData.length
          } ${t('bookmarks.titlePart2')}`
        }
      />
      <p className="saved-header__keywords-text">
        {t('bookmarks.keywords')}{' '}
        {keywords[0] && (<span className="saved-header__keyword">{keywords[0]}</span>)}
        {keywords[1] && (<>, <span className="saved-header__keyword">{keywords[1]}</span></>)}
        {keywords[2] && (<> и <span className="saved-header__keyword">{keywords[2]}</span></>)}
      </p>
    </div>
  );
}

export default SavedNewsHeader;
