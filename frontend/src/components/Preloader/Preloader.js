import Spinner from '../Spinner/Spinner';
import './Preloader.css';

function Preloader({ style, text = '' }) {
  return (
    <div className="preloader" style={style}>
      <Spinner />
      <p className="preloader__text">{text}</p>
    </div>
  );
}

export default Preloader;
