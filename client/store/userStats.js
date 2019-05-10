import axios from 'axios'

//ACTION TYPES
const SET_KEYWORDS_GOT = 'SET_KEYWORDS_GOT'
const ADD_CHALLENGE = 'ADD_CHALLENGE'
const GET_STATS = 'GET_STATS'

//ACTION CREATORS
export const getKeyWords = keywords => ({type: SET_KEYWORDS_GOT, keywords})
export const addChallenge = challenge => ({type: ADD_CHALLENGE, challenge})
export const getUserStats = stats => ({type: GET_STATS, stats})

//THUNK CREATORS

export const getStats = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/userStats')
    dispatch(getUserStats(data))
  } catch (error) {
    console.error(error)
  }
}

export const addChallengeToStats = (userId, challengeId) => async dispatch => {
  try {
    const challenge = {userId, challengeId, isCompleted: 'false'}
    console.log('challenge', challenge)
    const {data} = await axios.post('/api/userStats', challenge)
    console.log('DATA', data)
    dispatch(addChallenge(data))
  } catch (error) {
    console.log(error)
  }
}

// REDUCER
const initialState = {
  problemName: '',
  keywords: {
    gotKeywords: ['You got no keywords'],
    notGotKeywords: []
  },
  challenges: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYWORDS_GOT:
      return {...state, keywords: action.keywords}
    case GET_STATS:
      return {...state, challenges: action.stats}
    case ADD_CHALLENGE:
      return {
        ...state,
        challenges: [...state.challenges, action.challenge]
      }
    default:
      return state
  }
}

export default reducer
