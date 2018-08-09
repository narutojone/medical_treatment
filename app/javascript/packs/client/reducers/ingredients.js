import {
  GET_INGREDIENT,
  GET_PDF_URL
} from '../actions/types'

const initialState = {}

function ingredients (state = initialState, action) {
  const { data } = action
  switch (action.type) {

    case GET_INGREDIENT :
      return {
        ...state,
        items: data,
        url: ''
      }

    case GET_PDF_URL :
      return {
        ...state,
        url: data.url
      }

    default :
      return state
  }
}

export default ingredients;
