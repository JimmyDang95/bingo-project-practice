import axios from 'axios'

export const postUser = (newUserDto) =>
  axios.post('api/user', newUserDto).then((response) => response.data)

export const getUsers = () =>
  axios.get('api/user').then((response) => response.data)

export const getUser = (name) =>
    axios.get(`/api/user/${name}`).then((response) => response.data)
