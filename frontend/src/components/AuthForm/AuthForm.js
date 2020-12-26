import { useEffect } from 'react';
import Button from '../Button/Button';
import useFormWithValidation from '../../hooks/useForm';
import './AuthForm.css';

function AuthForm({
  type,
  title,
  buttonName,
  linkName,
  switchForm,
  handleSubmit,
  user,
  onChange,
  apiError,
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  const handleFormChange = (evt) => {
    handleChange(evt);
    onChange(evt);
  };

  const onSubmit = (evt) => {
    handleSubmit(evt, resetForm);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <h2 className="auth-form__title popup__title">{title}</h2>
      <label className="auth-form__label" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        name="email"
        className="auth-form__input"
        placeholder="Введите почту"
        onChange={handleFormChange}
        value={values.email || user.email || ''}
        required
      />
      <span className="auth-form__error">{errors.email || ''}</span>
      <label className="auth-form__label" htmlFor="password">
        Пароль
      </label>
      <input
        type="password"
        name="password"
        className="auth-form__input"
        placeholder="Введите пароль"
        minLength="6"
        onChange={handleFormChange}
        value={values.password || ''}
        required
      />
      <span className="auth-form__error">{errors.password || ''}</span>
      {type === 'register' && (
        <>
          <label className="auth-form__label" htmlFor="name">
            Имя
          </label>
          <input
            id="register-name"
            type="text"
            name="name"
            className="auth-form__input"
            placeholder="Введите своё имя"
            minLength="2"
            maxLength="30"
            onChange={handleFormChange}
            value={values.name || user.name || ''}
            required
          />
          <span className="auth-form__error">{errors.name || ''}</span>
        </>
      )}
      <span className="auth-form__error auth-form__error_general">
        {apiError}
      </span>
      <Button
        type="submit"
        buttonClass="button_type_text auth-form__button"
        disabled={!isValid}
      >
        {buttonName}
      </Button>
      <p className="auth-form__choice-text">
        или{' '}
        <button
          type="button"
          className="auth-form__link popup__link"
          onClick={switchForm}
        >
          {linkName}
        </button>
      </p>
    </form>
  );
}

export default AuthForm;
