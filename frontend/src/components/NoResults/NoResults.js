import notFoundLogo from '../../images/not-found.svg';
import './NoResults.css';

function NoResults() {
  return (
    <div className="no-results">
      <img className="no-results__logo" src={notFoundLogo} alt="Ничего не найдено" />
      <h2 className="no-results__title">Ничего не найдено</h2>
      <p className="no-results__text">К сожалению, по вашему запросу ничего не найдено</p>
    </div>
  );
}

export default NoResults;
