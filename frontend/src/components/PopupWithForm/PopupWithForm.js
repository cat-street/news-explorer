import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import SuccessForm from '../SuccessForm/SuccessForm';
import './PopupWithForm.css';

function PopupWithForm({ openedPopup, openPopup, closePopup }) {
  const closeOnBlack = (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  };

  return (
    <>
      <div className="popup" onMouseDown={closeOnBlack}>
        <div className="popup__content">
          <button className="button button_type_close" onClick={closePopup} />
          { openedPopup === 'login' && <LoginForm openPopup={openPopup} />}
          { openedPopup === 'register' && <RegisterForm openPopup={openPopup}/>}
          { openedPopup === 'success' && <SuccessForm openPopup={openPopup}/>}
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
