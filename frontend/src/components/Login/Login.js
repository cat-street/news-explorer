import { useTranslation } from 'react-i18next';
import AuthForm from '../AuthForm/AuthForm';

function Login({ openPopup, handleSignIn, ...props }) {
  const { t } = useTranslation(['forms', 'common']);

  const switchForm = () => {
    openPopup('register');
  };

  return (
    <AuthForm
      title={t('forms:titles.login')}
      buttonName={t('common:buttons.login')}
      linkName={t('common:buttons.register')}
      switchForm={switchForm}
      handleSubmit={handleSignIn}
      { ...props }
    />
  );
}

export default Login;
