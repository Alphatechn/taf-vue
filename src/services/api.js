// src/services/api.js
import axios from 'axios'

export function fetchCours(limit = 6) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
}
