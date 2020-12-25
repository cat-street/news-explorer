import apiConfig from './config';
import { getDateString, calculateDate } from './getDate';

const today = getDateString(new Date());
const previousDate = getDateString(calculateDate(-7));

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

// } async (keyword) => {
//   const { basePath } = apiConfig;
//   const today = getDateString(new Date());
//   const previousDate = calculateDate(-7);
//   const params =
// `${apiConfig.parameters}&from=${previousDate}&to=${today}&apiKey=${apiConfig.key}`;

//   const result = await fetch(`${basePath}?q=${keyword}${params}`);
//   if (result.status.ok) {
//     return result.json();
//   }
//   const { message } = result;
//   throw new Error(message);
// };

export default newsApi;
