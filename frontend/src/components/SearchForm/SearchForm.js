import Button from '../Button/Button';
import './SearchForm.css';

function SearchForm({ setSearch }) {
  const handleSubmit = (evt) => {
    const searchStatus = ['searching', 'no results'];
    const randomResult = Math.floor(Math.random() * 2);
    evt.preventDefault();
    setSearch(searchStatus[randomResult]);
  };

  return (
    <form className="search-form" onSubmit={ handleSubmit }>
      <input
        type="text"
        className="search-form__input"
        name="search"
        placeholder="Введите тему новости"
        required
      />
      <Button buttonClass="button_type_text search-form__button" type="submit">
        Искать
      </Button>
    </form>
  );
}

export default SearchForm;
