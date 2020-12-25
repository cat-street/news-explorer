function SuccessForm({ openPopup }) {
  const handleChange = () => {
    openPopup('login');
  };

  return (
    <form className="popup__form">
      <h2 className="popup__title">Пользователь успешно зарегистрирован!</h2>
      <p className="popup__choice-text popup__choice-text_bigger">
        <button className="popup__link" onClick={handleChange}>
          Войти
        </button>
      </p>
    </form>
  );
}

export default SuccessForm;
