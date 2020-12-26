import Button from '../Button/Button';
import { errors } from '../../lang/ru-ru';
import './SearchForm.css';

function SearchForm({ getNews }) {
  const handleFocus = (evt) => {
    const searchInput = evt.target;
    if (searchInput.value === errors.SEARCH) {
      searchInput.closest('form').reset();
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const searchInput = evt.target.search;
    if (searchInput.value === errors.SEARCH) {
      return;
    }
    if (!searchInput.value.trim()) {
      searchInput.value = errors.SEARCH;
      return;
    }
    await getNews(searchInput.value);
    searchInput.closest('form').reset();
  };

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        type="text"
        name="search"
        className="search-form__input"
        placeholder="Введите тему новости"
        onFocus={handleFocus}
        required
      />
      <Button buttonClass="button_type_text search-form__button" type="submit">
        Искать
      </Button>
    </form>
  );
}

export default SearchForm;
