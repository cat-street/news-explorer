const PAGE_SIZE = 100;
const DAYS_INTERVAL = 7;

const newsApiConfig = {
  KEY: process.env.REACT_APP_API_KEY,
  BASE_PATH: 'https://nomoreparties.co/news/v2/everything',
  PARAMETERS: `&pageSize=${PAGE_SIZE}`,
};

const apiConfig = {
  BASE_URL: 'https://api.news.catlogic.ru',
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  CREDENTIALS: 'include',
};

const apiRoutes = {
  SIGNUP: '/signup',
  SIGNIN: '/signin',
  SIGNOUT: '/signout',
  SELF: '/users/me',
  ARTICLES: '/articles',
};

export {
  newsApiConfig,
  DAYS_INTERVAL,
  apiConfig,
  apiRoutes,
};
