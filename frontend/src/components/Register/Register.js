import AuthForm from '../AuthForm/AuthForm';

function Register({ openPopup, handleRegistration, ...props }) {
  const switchForm = () => {
    openPopup('login');
  };

  return (
    <AuthForm
      title="Регистрация"
      buttonName="Зарегистрироваться"
      linkName="Войти"
      handleSubmit={handleRegistration}
      switchForm={switchForm}
      { ...props }
    />
  );
}

export default Register;
