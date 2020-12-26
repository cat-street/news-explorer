import SectionTitle from '../SectionTitle/SectionTitle';
import './SavedNewsHeader.css';

function SavedNewsHeader({ savedData }) {
  return (
    <div className="saved-header">
      <p className="saved-header__sub-title">Сохранённые статьи</p>
      <SectionTitle
        mixinClass="saved-header__title"
        title={
          `Мария-Антуанетта, у вас ${savedData.length} сохраненных статей`
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
