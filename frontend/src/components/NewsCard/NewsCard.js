import { useCallback, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import Button from '../Button/Button';
import { months } from '../../lang/ru-ru';
import './NewsCard.css';
import Tooltip from '../Tooltip/Tooltip';
import Logo from '../Logo/Logo';

function NewsCard({
  url,
  urlToImage,
  publishedAt,
  title,
  description,
  source,
  keyword = '',
  isLoggedIn,
}) {
  const tooltip = useRef();

  const formatDate = useCallback((value) => {
    const date = new Date(value);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }, []);

  const cleanDescription = (text) => text.replace(/(http\S+)/g, '');

  const showTooltip = () => {
    tooltip.current.classList.add('tooltip_visible');
  };

  const hideTooltip = () => {
    tooltip.current.classList.remove('tooltip_visible');
  };

  return (
    <li className="news-card">
      {urlToImage ? (
        <img
          className="news-card__image"
          src={urlToImage}
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
            onMouseEnter={isLoggedIn ? null : showTooltip}
            onMouseLeave={isLoggedIn ? null : hideTooltip}
            type="button"
            buttonClass="button button_type_icon-square button_icon-type_bookmark-normal"
          />
        </Route>
      </Switch>

      <div className="news-card__description">
        <a
          href={url}
          className="news-card__link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <time className="news-card__date" dateTime={publishedAt}>
            {formatDate(publishedAt)}
          </time>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__text">{cleanDescription(description)}</p>
          <p className="news-card__source">{source.name}</p>
        </a>
      </div>
    </li>
  );
}

export default NewsCard;
