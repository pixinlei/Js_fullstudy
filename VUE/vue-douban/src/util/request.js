import axios from 'axios'
import { response } from 'express'
import { config } from 'vue/types/umd'

const service = axios.create({
  baseURL: '/api'
})

service.interceptors.request.use(config => {
  return config
})

service.interceptors.response.use(response => {
  return response.data
})

export default service