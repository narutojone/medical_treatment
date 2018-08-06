import axios from 'axios'

const api = "http://localhost:3000/api"

const headers = {
  'Accept': 'application/json'
}

export const getFormulation = () =>
  axios.get(`${api}/formulation`, { headers })
    .then(res => res)    

export const getIngredient = (id) =>
  axios.get(`${api}/formulation_ingredient/${id}`, { headers })
    .then(res => res)