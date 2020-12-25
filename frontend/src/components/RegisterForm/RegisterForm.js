import Button from '../Button/Button';

function AuthForm({ openPopup }) {
  const handleChange = () => {
    openPopup('login');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    openPopup('success');
  };

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <h2 className="popup__title">Регистрация</h2>
      <label className="popup__label" htmlFor="email">
        Email
      </label>
      <input
        id="register-email"
        type="email"
        name="email"
        className="popup__form-input"
        placeholder="Введите почту"
        required
      />
      <span className="popup__error"></span>
      <label className="popup__label" htmlFor="password">
        Пароль
      </label>
      <input
        id="register-password"
        type="password"
        name="password"
        className="popup__form-input"
        placeholder="Введите пароль"
        required
      />
      <span className="popup__error"></span>
      <label className="popup__label" htmlFor="name">
        Имя
      </label>
      <input
        id="register-name"
        type="text"
        name="name"
        className="popup__form-input"
        placeholder="Введите своё имя"
        required
      />
      <span className="popup__error"></span>
      <span className="popup__error popup__error_general">
        Такой пользователь уже есть (пример)
      </span>
      <Button type="submit" buttonClass="button_type_text popup__button">
        Зарегистрироваться
      </Button>
      <p className="popup__choice-text">
        или{' '}
        <button type="button" className="popup__link" onClick={handleChange}>
          Войти
        </button>
      </p>
    </form>
  );
}

export default AuthForm;
