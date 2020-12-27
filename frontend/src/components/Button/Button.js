import './Button.css';

function Button({
  buttonClass = '',
  type,
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled = false,
  forwardedRef,
  children,
}) {
  return (
    <button
      ref={forwardedRef}
      type={type}
      className={`button ${buttonClass}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
