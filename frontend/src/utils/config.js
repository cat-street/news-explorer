const PAGE_SIZE = 100;
const DAYS_INTERVAL = 7;

const newsApiConfig = {
  KEY: process.env.REACT_APP_API_KEY,
  BASE_PATH: process.env.REACT_APP_NEWS_PATH,
  PARAMETERS: `&pageSize=${PAGE_SIZE}`,
};

const apiConfig = {
  BASE_URL: process.env.REACT_APP_BASE_PATH,
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
