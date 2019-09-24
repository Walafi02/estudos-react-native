import axios from 'axios'

const api = axios.create({
    baseURL:'https://rocketseat-node.herokuapp.com/api'
    // baseURL: 'http://10.10.1.69:3001/api'
    // baseURL: 'http://192.168.1.111:3001/api', //casa fortaleza
})

export default api