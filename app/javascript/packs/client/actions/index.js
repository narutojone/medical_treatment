import * as API from '../middleware'
import { GET_FORMULATION } from './types'

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