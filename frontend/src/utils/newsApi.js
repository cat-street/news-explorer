import { newsApiConfig, daysInterval } from './config';
import { getDateString, calculateDate } from './getDate';

const today = getDateString(new Date());
const previousDate = getDateString(calculateDate(daysInterval));

const newsApi = {
  newsApiConfig,
  today,
  previousDate,
  getData: async function getData(keyword) {
    const params = `${this.newsApiConfig.parameters}&from=${this.previousDate}&to=${this.today}&apiKey=${this.newsApiConfig.key}`;
    const result = await fetch(`${this.newsApiConfig.basePath}?q=${keyword}${params}`);
    if (result.ok) {
      return result.json();
    }
    const err = await result.json();
    throw new Error(err.message);
  },
};

export default newsApi;
