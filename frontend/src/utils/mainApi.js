import { apiConfig } from './config';

const mainApi = {
  apiConfig,
  fetchData: async function _fetchData(path, method = 'GET', body = null) {
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
  auth: function auth(path, user) {
    const userData = { ...user };
    if (!userData.name) {
      delete userData.name;
    }
    return this.fetchData(
      path,
      'POST',
      JSON.stringify(userData),
    );
  },
  get: function get(path) {
    return this.fetchData(path);
  },
};

export default mainApi;
