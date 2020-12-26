import notFoundLogo from '../../images/not-found.svg';
import './NoResults.css';

function NoResults({ type }) {
  return (
    <div className="no-results">
      {type === 'nothing' && (
        <>
          <img
            className="no-results__logo"
            src={notFoundLogo}
            alt="Ничего не найдено"
          />
          <h2 className="no-results__title">Ничего не найдено</h2>
          <p className="no-results__text">
            К сожалению, по вашему запросу ничего не найдено
          </p>
        </>
      )}
      {type === 'error' && (
        <>
          <h2 className="no-results__title no-results__title_error">Ошибка</h2>
          <p className="no-results__text no-results__text_error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </p>
        </>
      )}
    </div>
  );
}

export default NoResults;
