import { useTranslation } from 'react-i18next';
import notFoundLogo from '../../images/not-found.svg';
import './NoResults.css';

function NoResults({ type }) {
  const { t } = useTranslation('forms');

  return (
    <div className="no-results">
      {type === 'nothing' && (
        <>
          <img
            className="no-results__logo"
            src={notFoundLogo}
            alt="Ничего не найдено"
          />
          <h2 className="no-results__title">
            {t('errors.searchNoResults')}
          </h2>
          <p className="no-results__text">
            {t('errors.searchNoResultsDescription')}
          </p>
        </>
      )}
      {type === 'error' && (
        <>
          <h2 className="no-results__title no-results__title_error">
            {t('errors.searchError')}
          </h2>
          <p className="no-results__text no-results__text_error">
            {t('errors.searchServerError')}
          </p>
        </>
      )}
    </div>
  );
}

export default NoResults;
