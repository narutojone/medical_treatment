import axios from 'axios'

const api = "http://localhost:3000/api"

const headers = {
  'Accept': 'application/json'
}

export const getFormulation = () =>
  axios.get(`${api}/formulation`, {headers})
    .then(res => res)    