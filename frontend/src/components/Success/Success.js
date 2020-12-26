import './Success.css';

function Success({ openPopup }) {
  const handleChange = () => {
    openPopup('login');
  };

  return (
    <div className="success">
      <h2 className="success__title popup__title">
        Пользователь успешно зарегистрирован!
      </h2>
      <p className="success__text">
        <button
          type="button"
          className="success__link popup__link"
          onClick={handleChange}
        >
          Войти
        </button>
      </p>
    </div>
  );
}

export default Success;
