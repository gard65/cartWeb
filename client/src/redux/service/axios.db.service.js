import axios from 'axios'

export const DB_URL = 'http://localhost:3001/api/db'

const $apiDb = axios.create({
    withCredentials: true,
    baseURL: DB_URL,
})
$apiDb.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$apiDb.interceptors.response.use((config) => {
  return config
}, async (error) => {
  const originalRequest = error.config
  if (error.response?.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
          const response = await axios.get(`${DB_URL}/refresh`, {withCredentials: true})
          localStorage.setItem('token', response.data?.accessToken)
          return $apiDb.request(originalRequest)
      } catch (e) {
          console.log(e)
      }
  }
  throw error
})

export default $apiDb
