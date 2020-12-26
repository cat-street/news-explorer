import { useContext } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

function SavedNewsHeader({ savedData }) {
  const currentUser = useContext(CurrentUserContext);

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
        По ключевым словам: <span className="saved-header__keyword">Коты</span>,{' '}
        <span className="saved-header__keyword">Лапы</span> и{' '}
        <span className="saved-header__keyword">2-м другим</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
