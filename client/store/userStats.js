//ACTION TYPES
const SET_KEYWORDS_GOT = 'SET_KEYWORDS_GOT'

//ACTION CREATORS
export const getKeyWords = keywords => ({type: SET_KEYWORDS_GOT, keywords})

//THUNK CREATORS

// export const fetchStats = user => async dispatch => {
//   try {
//     if (user) {
//       const data = 'placeholder'
//       // = axios or other db call goes here to get names and id#s
//       dispatch(setStats(data))
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }

// REDUCER
const initialState = {
  problemName: '',
  keywords: {
    gotKeywords: ['You got no keywords'],
    notGotKeywords: []
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYWORDS_GOT:
      return {...state, keywords: action.keywords}

    default:
      return state
  }
}

export default reducer
