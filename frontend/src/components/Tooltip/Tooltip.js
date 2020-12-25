import './Tooltip.css';

function Tooltip({ forwardedRef, bigger, children }) {
  return (
    <div className={`tooltip ${bigger && 'tooltip_bigger'}`} ref={forwardedRef}>
      { children }
    </div>
  );
}

export default Tooltip;
