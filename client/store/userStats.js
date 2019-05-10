import axios from 'axios'

//ACTION TYPES
const SET_KEYWORDS_GOT = 'SET_KEYWORDS_GOT'
const ADD_CHALLENGE = 'ADD_CHALLENGE'
const GET_STATS = 'GET_STATS'
const COMPLETE_CHALLENGE = 'COMPLETE_CHALLENGE'

//ACTION CREATORS
export const getKeyWords = keywords => ({type: SET_KEYWORDS_GOT, keywords})
export const addChallenge = challenge => ({type: ADD_CHALLENGE, challenge})
export const getUserStats = stats => ({type: GET_STATS, stats})
export const completeChallenge = challenge => ({
  type: COMPLETE_CHALLENGE,
  challenge
})

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
    const {data} = await axios.post('/api/userStats', challenge)
    dispatch(addChallenge(data))
  } catch (error) {
    console.log(error)
  }
}

export const markChallengeDone = (userId, challengeId) => async dispatch => {
  try {
    const challenge = {userId, challengeId, isCompleted: true}
    const {data} = await axios.put('/api/userStats', challenge)
    dispatch(completeChallenge(data))
  } catch (error) {
    console.error(error)
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
