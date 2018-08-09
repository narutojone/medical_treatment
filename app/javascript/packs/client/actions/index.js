import * as API from '../middleware'
import { GET_FORMULATION, GET_INGREDIENT, GET_PDF_URL } from './types'

export function getFormulation() {
  return dispatch => {
    API.getFormulation()
      .then(res => dispatch({
          type: GET_FORMULATION,
          data: res.data
        })
    )
  }
}

export function getIngredient(id) {
  return dispatch => {
    API.getIngredient(id)
      .then(res => dispatch({
        type: GET_INGREDIENT,
        data: res.data
      }))
  }
}

export function generatePDF(data) {
  return dispatch => {
    API.generatePDF(data)
      .then(res => dispatch({
        type: GET_PDF_URL,
        data: res.data
      }))
  }
}