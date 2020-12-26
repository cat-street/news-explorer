import AuthForm from '../AuthForm/AuthForm';

function Login({ openPopup, handleSignIn, ...props }) {
  const switchForm = () => {
    openPopup('register');
  };

  return (
    <AuthForm
      title="Вход"
      buttonName="Войти"
      linkName="Зарегистрироваться"
      switchForm={switchForm}
      handleSubmit={handleSignIn}
      { ...props }
    />
  );
}

export default Login;
