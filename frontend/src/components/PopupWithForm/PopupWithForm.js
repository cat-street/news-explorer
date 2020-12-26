import Login from '../Login/Login';
import Register from '../Register/Register';
import Success from '../Success/Success';
import './PopupWithForm.css';

function PopupWithForm({
  openedPopup, openPopup, closePopup, ...props
}) {
  const closeOnBlack = (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  };

  return (
    <>
      <div className="popup" onMouseDown={closeOnBlack}>
        <div className="popup__content">
          <button
            type="button"
            className="button button_type_close"
            onClick={closePopup}
          />
          {openedPopup === 'login' && (
            <Login
              type={openedPopup}
              openPopup={openPopup}
              { ...props }
            />
          )}
          {openedPopup === 'register' && (
            <Register
              type={openedPopup}
              openPopup={openPopup}

              { ...props }
            />
          )}
          {openedPopup === 'success' && (
            <Success openPopup={openPopup} type={openedPopup} />
          )}
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
