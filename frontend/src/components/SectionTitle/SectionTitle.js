import './SectionTitle.css';

function SectionTitle({ mixinClass = '', title }) {
  return <h2 className={`section-title ${mixinClass}`}>{ title }</h2>;
}

export default SectionTitle;
