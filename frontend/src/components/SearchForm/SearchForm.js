import Button from '../Button/Button';
import { errors } from '../../lang/ru-ru';
import newsApi from '../../utils/newsApi';
import './SearchForm.css';

function SearchForm({ setSearch, setNews }) {
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
    try {
      setSearch('searching');
      const data = await newsApi.getData(evt.target.search.value);
      if (data.articles.length === 0) {
        setSearch('no results');
        return;
      }
      setNews(data.articles);
      setSearch('results');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
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
