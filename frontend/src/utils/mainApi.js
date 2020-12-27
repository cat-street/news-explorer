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
    return this.fetchData(
      path,
      'POST',
      JSON.stringify(user),
    );
  },
  get: function get(path) {
    return this.fetchData(path);
  },
  post: function post(path, article) {
    return this.fetchData(
      path,
      'POST',
      JSON.stringify(article),
    );
  },
  delete: function del(path) {
    return this.fetchData(path, 'DELETE');
  },
};

export default mainApi;
