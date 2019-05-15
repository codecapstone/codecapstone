const LOADING = 'LOADING'

export const setLoading = bool => ({type: LOADING, bool})

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return action.bool

    default:
      return state
  }
}

export default reducer
