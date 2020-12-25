import './Backdrop.css';

function Backdrop({ closePopup }) {
  return (
    <div
      className="backdrop"
      onClick={closePopup}
    ></div>
  );
}

export default Backdrop;
