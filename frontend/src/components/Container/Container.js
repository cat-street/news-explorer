import './Container.css';

function Container({ mixinClass = '', children }) {
  return (
    <div className={`container ${mixinClass}`}>
      {children}
    </div>
  );
}

export default Container;
