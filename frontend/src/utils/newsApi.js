import { newsApiConfig, DAYS_INTERVAL } from './config';
import { getDateString, calculateDate } from './getDate';

const today = getDateString(new Date());
const previousDate = getDateString(calculateDate(DAYS_INTERVAL));

const newsApi = {
  newsApiConfig,
  today,
  previousDate,
  getData: async function getData(keyword, language) {
    const params = `${this.newsApiConfig.PARAMETERS}&language=${language}&from=${this.previousDate}&to=${this.today}&apiKey=${this.newsApiConfig.KEY}`;
    const result = await fetch(`${this.newsApiConfig.BASE_PATH}?q=${keyword}${params}`);
    if (result.ok) {
      return result.json();
    }
    const err = await result.json();
    throw new Error(err.message);
  },
};

export default newsApi;
