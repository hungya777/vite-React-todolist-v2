import axios from 'axios';
const { VITE_API_URL } = import.meta.env; 
import { getCookie } from '../services/utilsService';

// TODO列表
export const todos = ( ) => {
  return axios({
    headers: { Authorization: getCookie('token') },
    method: 'get',
    url: VITE_API_URL +"/todos/",
  });
}

// 新增TODO列表
export const addTodo = ( data ) => {
  return axios({
    headers: { Authorization: getCookie('token') },
    method: 'post',
    url: VITE_API_URL + "/todos/",
    data: data,
  });
}

// TODO完成/已完成切換
export const toggleTodo = ( id ) => {
  return axios({
    headers: { Authorization: getCookie('token') },
    method: 'patch',
    url: VITE_API_URL +"/todos" + `/${id}/toggle`,
  });
}

// TODO刪除
export const deleteTodo = ( id ) => {
  return axios({
    headers: { Authorization: getCookie('token') },
    method: 'delete',
    url: VITE_API_URL +"/todos" + `/${id}`,
  });
}