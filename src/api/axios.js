import axios from 'axios'
import { API_KEY } from './apikey.js'


const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "ko-KR",
  }
})

export default instance