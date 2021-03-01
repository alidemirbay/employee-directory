/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/?results=100&nat=us';

export default {
    searchEmployees: () => {
        return axios.get(BASEURL);
    }
};