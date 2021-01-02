import { useCallback, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import Button from '../Button/Button';
import months from '../../translations/ru/months';
import './NewsCard.css';
import Tooltip from '../Tooltip/Tooltip';
import Logo from '../Logo/Logo';

function NewsCard({
  card, isLoggedIn, saveArticle, removeArticle,
}) {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = card;
  const cardElement = useRef();
  const tooltip = useRef();
  const button = useRef();

  const formatDate = useCallback((value) => {
    const newDate = new Date(value);
    const day = newDate.getDate();
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
    return `${day} ${month}, ${year}`;
  }, []);

  const cleanDescription = (txt) => txt.replace(/(http\S+)/g, '');

  const showTooltip = () => {
    tooltip.current.classList.add('tooltip_visible');
  };

  const hideTooltip = () => {
    tooltip.current.classList.remove('tooltip_visible');
  };

  const handleSave = async () => {
    await saveArticle(card);
    button.current.classList.add('button_icon-type_bookmark-marked');
  };

  const handleRemove = () => {
    removeArticle(card._id, cardElement);
  };

  return (
    <li className="news-card" ref={cardElement}>
      {image ? (
        <img
          className="news-card__image"
          src={image}
          alt={title}
        />
      ) : (
        <div className="news-card__placeholder">
          <Logo className="logo_card" />
        </div>
      )}

      <Switch>
        <Route path="/saved-news">
          {keyword && <p className="news-card__tag">{keyword}</p>}
          <Tooltip bigger forwardedRef={tooltip}>
            Убрать из сохраненных
          </Tooltip>
          <Button
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onClick={handleRemove}
            type="button"
            buttonClass="button button_type_icon-square button_icon-type_trash"
          />
        </Route>
        <Route path="/">
          {!isLoggedIn && (
            <Tooltip forwardedRef={tooltip}>
              Войдите, чтобы сохранять статьи
            </Tooltip>
          )}
          <Button
            forwardedRef={button}
            onMouseEnter={isLoggedIn ? null : showTooltip}
            onMouseLeave={isLoggedIn ? null : hideTooltip}
            type="button"
            buttonClass="button button_type_icon-square button_icon-type_bookmark-normal"
            onClick={isLoggedIn ? handleSave : undefined}
          />
        </Route>
      </Switch>

      <div className="news-card__description">
        <a
          href={link}
          className="news-card__link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <time className="news-card__date" dateTime={date}>
            {formatDate(date)}
          </time>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__text">{cleanDescription(text)}</p>
          <p className="news-card__source">{source}</p>
        </a>
      </div>
    </li>
  );
}

export default NewsCard;
