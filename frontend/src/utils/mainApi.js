import { apiConfig } from './config';

const mainApi = {
  apiConfig,
  _fetchData: async function _fetchData(path, method, body = null) {
    const res = await fetch(`${this.apiConfig.BASE_URL}${path}`, {
      method,
      headers: this.apiConfig.HEADERS,
      body,
      credentials: this.apiConfig.CREDENTIALS,
    });
    if (res.ok) {
      return res.json();
    }
    const statusError = await res.json();
    let { message } = statusError;
    if (statusError.validation) {
      message = statusError.validation.body.message;
    }
    throw new Error(message);
  },
};

export default mainApi;
