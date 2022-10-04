import axios from 'axios';

export const instance = axios.create({
  withCredentials : true,
  baseURL         : `https://social-network.samuraijs.com/api/1.0/`,
  headers         : {
    "API-KEY": "bd11c818-3e91-457e-8ff1-2f2f73147022"
  }
});
