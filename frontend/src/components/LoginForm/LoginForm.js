import Button from '../Button/Button';

function LoginForm({ openPopup }) {
  const handleChange = () => {
    openPopup('register');
  };

  return (
    <form className="popup__form">
      <h2 className="popup__title">Вход</h2>
      <label className="popup__label" htmlFor="email">
        Email
      </label>
      <input
        id="login-email"
        type="email"
        name="email"
        className="popup__form-input"
        placeholder="Введите почту"
        required
      />
      <span className="popup__error">Неправильный формат email (пример)</span>
      <label className="popup__label" htmlFor="password">
        Пароль
      </label>
      <input
        id="login-password"
        type="password"
        name="password"
        className="popup__form-input"
        placeholder="Введите пароль"
        required
      />
      <span className="popup__error"></span>
      <span className="popup__error popup__error_general"></span>
      <Button type="submit" buttonClass="button_type_text popup__button" disabled>
        Войти
      </Button>
      <p className="popup__choice-text">
        или{' '}
        <button type="button" className="popup__link" onClick={handleChange}>
          Зарегистрироваться
        </button>
      </p>
    </form>
  );
}

export default LoginForm;
