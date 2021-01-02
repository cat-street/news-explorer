import { useTranslation } from 'react-i18next';
import AuthForm from '../AuthForm/AuthForm';

function Register({ openPopup, handleRegistration, ...props }) {
  const { t } = useTranslation(['forms', 'common']);

  const switchForm = () => {
    openPopup('login');
  };

  return (
    <AuthForm
      title={t('forms:titles.register')}
      buttonName={t('common:buttons.register')}
      linkName={t('common:buttons.login')}
      handleSubmit={handleRegistration}
      switchForm={switchForm}
      { ...props }
    />
  );
}

export default Register;
