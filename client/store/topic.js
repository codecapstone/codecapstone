import axios from 'axios'

// ACTION TYPES
const GET_TOPICS = 'GET_TOPICS'
const SELECTED_TOPIC = 'SELECTED_TOPIC'

// ACTION CREATORS
const getTopics = all => ({ type: GET_TOPICS, all })
const selectedTopic = selected => ({type: SELECTED_TOPIC, selected})

// THUNK CREATORS

export const fetchTopics = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/topics')
    dispatch(getTopics(data))
  }
  catch (error) {
    console.error(error)
  }
}

export const singleTopic = id => async dispatch => {
  try {
    
    const { data } = await axios.get(`/api/topics/${id}`)
   
    dispatch(selectedTopic(data))
  } catch (error) {
    console.error(error)
  }
}

//Initial State
const initialState = {all: [], selected: {}}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPICS:
      return {...state, all: action.all}
    case SELECTED_TOPIC:
      return {...state, selected: action.selected}
    default:
      return state
  }
}
export default reducer