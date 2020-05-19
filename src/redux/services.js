import axios from 'axios'

axios.defaults.baseURL = 'http://77.120.241.80:8911/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const API_PATH = {
  //USERS
  USERS: '/users',
  USER: '/user/',
}

//API USERS
export const users = () => {

  const all = async () => {
    return await axios.get(API_PATH.USERS)
  }

  const create = async data => {
    return await axios.post(API_PATH.USERS, data)
  }

  const update = async (id, body) => {
    return await axios.put(API_PATH.USER+ id, body)
  }

  const remove = async (id) => {
    return await axios.delete(API_PATH.USER + id)
  }

  return {create, all, update, remove}
}
