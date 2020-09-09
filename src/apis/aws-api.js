import axios from 'axios';

import {
    IS_DEV
} from '../utils/envUtils';

import {
    DEV_URL,
    PROD_URL
} from '../utils/urls';

export const getAllUsers = () => {

    const users = axios.get(IS_DEV ? DEV_URL : PROD_URL)
        .then(data => data).catch(err => console.log(err));

    return users.data;

}