import exampleProblem from '../ExampleProblem/example'
import axios from 'axios'

//ACTION TYPES
const GET_PROBLEMS = 'GET_PROBLEMS'
const SET_PROBLEM = 'SET_PROBLEM'
const NEW_PROBLEM = 'NEW_PROBLEM'

//ACTION CREATORS
const getProblems = all => ({type: GET_PROBLEMS, all})
const setProblem = selected => ({type: SET_PROBLEM, selected})
const postedProblem = problem => ({type: NEW_PROBLEM, problem})

//THUNK CREATORS

export const fetchProblems = () => async dispatch => {
  try {
    // if (isLoggedIn) {
    const {data} = await axios.get('/api/challenges')
    // console.log('DATA', data)
    dispatch(getProblems(data))
    // }
  } catch (error) {
    console.error(error)
  }
}

export const selectProblem = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/challenges/${id}`)

    dispatch(setProblem(data))
  } catch (error) {
    console.error(error)
  }
}

export const postProblem = problem => async dispatch => {
  try {
    let newProblem = await axios.post('/api/challenges', problem)
    dispatch(postedProblem(newProblem))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const initialState = {all: [], selected: exampleProblem, newProblem: {}}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROBLEMS:
      return {...state, all: action.all}
    case SET_PROBLEM:
      return {...state, selected: action.selected}
    case NEW_PROBLEM:
      return {...state, newProblem: action.problem}
    default:
      return state
  }
}

export default reducer
