import axios from 'axios';

const usersUrl = "https://jsonplaceholder.typicode.com/users"
const postsUrl = "https://jsonplaceholder.typicode.com/posts"
const todosUrl = "https://jsonplaceholder.typicode.com/todos"

const getAll = (url) => axios.get( url )

//const todoById = (url, id) => axios.get(`${url}?userId=${id}`)

const updateEl = (url, id, el) => axios.patch(`${url}/${id}`,el)

const deleteEl = (url,id) => axios.delete(`${url}/${id}`)

const getFromUser = (url, id, amount = 6) => 
 getAll(`${url}?userId=${id}&_limit=${amount}`)

 const addToUser = (url,id,obj) => axios.post(`${url}?userId=${id}`,obj)

const addUser = (url,obj) => axios.post(url, obj)

export  {getAll, usersUrl, postsUrl, todosUrl, updateEl,
     deleteEl, getFromUser, addToUser, addUser}

