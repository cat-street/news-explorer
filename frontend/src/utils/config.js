const language = 'ru';
const PAGE_SIZE = 100;
const DAYS_INTERVAL = 7;

const newsApiConfig = {
  KEY: '73d5afb0ad454c49b9be582794c88751',
  BASE_PATH: 'https://newsapi.org/v2/everything',
  PARAMETERS: `&pageSize=${PAGE_SIZE}&language=${language}&sortBy=publishedAt`,
};

const apiConfig = {
  BASE_URL: 'https://localhost:3000',
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  CREDENTIALS: 'include',
};

export {
  newsApiConfig,
  DAYS_INTERVAL,
  apiConfig,
};
