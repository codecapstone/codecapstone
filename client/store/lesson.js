import axios from 'axios'

// ACTION TYPES
const GET_LESSONS = 'GET_LESSONS'
const SELECTED_LESSON = 'SELECTED_LESSON'
const NEW_LESSON = 'NEW_LESSON'

// ACTION CREATORS
const getLessons = all => ({type: GET_LESSONS, all})
const selectedLesson = selected => ({type: SELECTED_LESSON, selected})
const postedLesson = lesson => ({type: NEW_LESSON, lesson})

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

export const postLesson = lesson => async dispatch => {
  try {
    let newLesson = await axios.post('/api/lessons', lesson)
    dispatch(postedLesson(newLesson))
  } catch (err) {
    console.error(err)
  }
}

//Initial State
const initialState = {all: [], selected: {}, newLesson: {}}

//REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LESSONS:
      return {...state, all: action.all}
    case SELECTED_LESSON:
      return {...state, selected: action.selected}
    case NEW_LESSON:
      return {...state, newLesson: action.lesson}
    default:
      return state
  }
}
export default reducer
