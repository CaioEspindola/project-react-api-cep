import axios from 'axios'
//                 Base URL/Rota
//https://viacep.com.br/ws/88190000/json

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

export default api
