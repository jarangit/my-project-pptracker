import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_DOMAIN_API,
  //   headers: {
  //   'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
  //   'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API
  // }
  // baseURL: process.env.NEXT_PUBLIC_DOMAIN_API_PROD,
  // headers: {
  //   'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY_PROD,
  //   'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_PROD
  // }
  baseURL: process.env.NEXT_PUBLIC_DOMAIN_API_FOOT_API,
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_FOOT_API
  }


});

// กำหนดค่าเริ่มต้นสำหรับ retry
const DEFAULT_RETRIES = 3;
const DEFAULT_RETRY_DELAY = 1000;

// กำหนด interceptor สำหรับ rate limiting และ retry mechanism
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { config, response } = error;
    const { retries = DEFAULT_RETRIES, retryDelay = DEFAULT_RETRY_DELAY } = config;

    if (response.status === 429) {
      if (retries > 0) {
        return new Promise((resolve) => {
          setTimeout(() => resolve(axiosInstance(config)), retryDelay);
        });
      }
    }

    return Promise.reject(error);
  }
);