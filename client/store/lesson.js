import axios from 'axios'

// ACTION TYPES
const GET_LESSONS = 'GET_LESSONS'
const SELECTED_LESSON = 'SELECTED_LESSON'

// ACTION CREATORS
const getLessons = all => ({type: GET_LESSONS, all})
const selectedLesson = selected => ({type: SELECTED_LESSON, selected})

// THUNK CREATORS

export const fetchLessons = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/lessons')
    dispatch(getLessons(data))
  } catch (error) {
    console.error(error)
  }
}

export const singleLesson = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/lessons/${id}`)
    dispatch(selectedLesson(data))
  } catch (error) {
    console.error(error)
  }
}

//Initial State
const initialState = {all: [], selected: {}}

//REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LESSONS:
      return { ...state, all: action.all }
    case SELECTED_LESSON:
      return {...state, selected: action.selected}
    default:
      return state
  }
}
export default reducer