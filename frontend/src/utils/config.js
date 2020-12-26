const language = 'ru';
const pageSize = 100;
const daysInterval = 7;

const newsApiConfig = {
  key: '73d5afb0ad454c49b9be582794c88751',
  basePath: 'https://newsapi.org/v2/everything',
  parameters: `&pageSize=${pageSize}&language=${language}&sortBy=publishedAt`,
};

export { newsApiConfig, daysInterval };
