import axios from 'axios';

import { IS_DEV } from '../utils/envUtils';

import { DEV_URL, PROD_URL } from '../utils/urls';

import { REQUEST_METHOD } from '../utils/reqMethods';

export const awsPrinciplesApi = (url, method, data) => {
  switch (method) {
    case REQUEST_METHOD.GET:
      return axios.get(url);
    default:
      return;
  }
};
