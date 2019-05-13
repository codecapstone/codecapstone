import axios from 'axios'

//ACTION TYPES
const SET_APPROACH = 'SET_APPROACH'

const SET_EXAMPLE = 'SET_EXAMPLE'
const CLEAR_INPUT = 'CLEAR_INPUT'

//ACTION CREATORS
export const setApproach = approach => ({type: SET_APPROACH, approach})
export const setExamples = example => ({type: SET_EXAMPLE, example})
export const clearInput = () => ({type: CLEAR_INPUT})

// REDUCER
const initialState = {
  approach: '',
  example: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPROACH:
      return {...state, approach: action.approach}
    case SET_EXAMPLE:
      return {...state, example: action.example}
    case CLEAR_INPUT:
      return initialState
    default:
      return state
  }
}

export default reducer
