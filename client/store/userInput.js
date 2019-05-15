import axios from 'axios'

//ACTION TYPES
const SET_USERPROMPT = 'SET_USERPROMPT'
const SET_APPROACH = 'SET_APPROACH'
const SET_EXAMPLE = 'SET_EXAMPLE'
const CLEAR_INPUT = 'CLEAR_INPUT'
const RELOAD = 'RELOAD'

//ACTION CREATORS
const promptSet = userPrompt => ({type: SET_USERPROMPT, userPrompt})
const approachSet = approach => ({type: SET_APPROACH, approach})
const setInput = input => ({type: RELOAD, input})
export const setExamples = example => ({type: SET_EXAMPLE, example})
const clearedInput = () => ({type: CLEAR_INPUT})

//SEND TO SESSION
export const setPrompt = userPrompt => async dispatch => {
  try {
    const {data} = await axios.post('/api/userInput/userPrompt', {
      info: userPrompt
    })

    dispatch(promptSet(data))
  } catch (err) {
    console.error(err)
  }
}

export const setApproach = approach => async dispatch => {
  try {
    const {data} = await axios.post('/api/userInput/approach', {
      info: approach
    })

    dispatch(approachSet(data))
  } catch (err) {
    console.error(err)
  }
}

export const getUserInput = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/userInput')

    dispatch(setInput(data))
  } catch (err) {
    console.error(err)
  }
}

export const clearInput = () => async dispatch => {
  try {
    await axios.delete('/api/userInput')

    dispatch(clearedInput())
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const initialState = {
  userPrompt: '',
  example: '',
  approach: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERPROMPT:
      return {...state, userPrompt: action.userPrompt}
    case SET_EXAMPLE:
      return {...state, example: action.example}
    case CLEAR_INPUT:
      return initialState
    case SET_APPROACH:
      return {...state, approach: action.approach}
    case RELOAD:
      return action.input
    default:
      return state
  }
}

export default reducer
