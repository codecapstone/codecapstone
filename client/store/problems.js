import exampleProblem from '../ExampleProblem/example'
import axios from 'axios'

//ACTION TYPES
const GET_PROBLEMS = 'GET_PROBLEMS'
const SET_PROBLEM = 'SET_PROBLEM'

//ACTION CREATORS
const getProblems = all => ({type: GET_PROBLEMS, all})
const setProblem = selected => ({type: SET_PROBLEM, selected})

//THUNK CREATORS

export const fetchProblems = isLoggedIn => async dispatch => {
  try {
    if (isLoggedIn) {
      const data = await axios.get('/challenges')
      dispatch(getProblems(data))
    }
  } catch (error) {
    console.error(error)
  }
}

export const selectProblem = id => async dispatch => {
  try {
    const data = await axios.get(`/challenges/${id}`)
    dispatch(setProblem(data))
  } catch (error) {
    console.error(error)
  }
}

// REDUCER
const initialState = {all: {}, selected: exampleProblem}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROBLEMS:
      return {...state, all: action.all}
    case SET_PROBLEM:
      return {...state, selected: action.selected}
    default:
      return state
  }
}

export default reducer
