const language = 'ru';
const PAGE_SIZE = 100;
const DAYS_INTERVAL = 7;

const newsApiConfig = {
  KEY: '73d5afb0ad454c49b9be582794c88751',
  BASE_PATH: 'https://newsapi.org/v2/everything',
  PARAMETERS: `&pageSize=${PAGE_SIZE}&language=${language}&sortBy=publishedAt`,
};

const apiConfig = {
  BASE_URL: 'http://localhost:3001',
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
};

export {
  newsApiConfig,
  DAYS_INTERVAL,
  apiConfig,
  apiRoutes,
};
