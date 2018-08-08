import axios from 'axios'

const url = window.location.href
const arr = url.split("/");
const api =  `${arr[0]}//${arr[2]}/api`

const headers = {
  'Accept': 'application/json'
}

export const getFormulation = () =>
  axios.get(`${api}/formulation`, { headers })
    .then(res => res)    

export const getIngredient = (id) =>
  axios.get(`${api}/formulation_ingredient/${id}`, { headers })
    .then(res => res)

export const generatePDF = (data) =>
  axios.post(`${api}/formulation_ingredient`, { ...data }, { headers })
  .then(res => res)