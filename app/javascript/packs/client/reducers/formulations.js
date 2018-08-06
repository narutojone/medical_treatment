import {
  GET_FORMULATION,
} from '../actions/types'

const initialState = {}

function formulations (state = initialState, action) {
  const { data } = action
  switch (action.type) {

    case GET_FORMULATION :
    return [
      ...data
    ]

    default :
      return state
  }
}

export default formulations;
