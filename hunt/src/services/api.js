import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.10.1.69:3001/api'
})

export default api