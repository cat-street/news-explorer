import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './SearchForm.css';

function SearchForm({
  getNews, setSearch, resetCounter, removeFromStorage,
}) {
  const { t } = useTranslation(['forms', 'common']);
  const searchError = t('forms:errors.searchNoKeyword');

  const handleFocus = (evt) => {
    const searchInput = evt.target;
    if (searchInput.value === searchError) {
      searchInput.closest('form').reset();
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    resetCounter();
    removeFromStorage();
    const searchInput = evt.target.search;
    if (searchInput.value === searchError) {
      return;
    }
    if (!searchInput.value.trim()) {
      searchInput.value = searchError;
      return;
    }
    try {
      await getNews(searchInput.value);
    } catch (err) {
      setSearch('error');
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="search"
        className="search-form__input"
        placeholder={t('forms:placeholders.search')}
        onFocus={handleFocus}
        required
      />
      <Button buttonClass="button_type_text search-form__button" type="submit">
        {t('common:buttons.search')}
      </Button>
    </form>
  );
}

export default SearchForm;
