import { apiConfig, daysInterval } from './config';
import { getDateString, calculateDate } from './getDate';

const today = getDateString(new Date());
const previousDate = getDateString(calculateDate(daysInterval));

const newsApi = {
  apiConfig,
  today,
  previousDate,
  getData: async function getData(keyword) {
    const params = `${this.apiConfig.parameters}&from=${this.previousDate}&to=${this.today}&apiKey=${this.apiConfig.key}`;
    const result = await fetch(`${this.apiConfig.basePath}?q=${keyword}${params}`);
    if (result.ok) {
      return result.json();
    }
    const err = await result.json();
    throw new Error(err.message);
  },
};

export default newsApi;
