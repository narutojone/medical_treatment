import {
  GET_INGREDIENT,
} from '../actions/types'

const initialState = {}

function ingredients (state = initialState, action) {
  const { data } = action
  switch (action.type) {

    case GET_INGREDIENT :
    return [
      ...data
    ]

    default :
      return state
  }
}

export default ingredients;
