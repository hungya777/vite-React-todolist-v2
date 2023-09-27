import axios from 'axios';
const { VITE_API_URL } = import.meta.env;
import { getCookie } from '../services/utilsService';

// 使用者登入
export const signIn = ( data ) => {
  return axios({
    headers: { 
      Accept: 'application/json',
      'Content-Type': 'application/json', 
    },
    method: 'post',
    url: VITE_API_URL + "/users/sign_in",
    data: data
  });
}

// 使用者登出
export const signOut = () => {
  return axios({
    headers: { Authorization: getCookie('token') },
    method: 'post',
    url: VITE_API_URL + "/users/sign_out",
  });
}

// 使用者註冊
export const users = ( data ) => {
  console.log('data:', data);
  return axios({
    method: 'post',
    url: VITE_API_URL + "/users/sign_up",
    data: data
  });
}





