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
export default $apiDb
