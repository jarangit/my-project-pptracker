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