import axios from 'axios';

import { REQUEST_METHOD } from '../utils/reqMethods';

export const awsPrinciplesApi = (url, method, data) => {
  switch (method) {
    case REQUEST_METHOD.GET:
      return axios.get(url);
    default:
      return;
  }
};
