import './Button.css';

function Button({
  buttonClass = '',
  type,
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled = false,
  children,
}) {
  return (
    <button
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
