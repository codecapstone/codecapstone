import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADMIN_USER = 'ADMIN_USER'

/**
 * ACTION CREATORS
 */
const newAdmin = user => ({type: ADMIN_USER, user})

/**
 * THUNK CREATORS
 */

export const makeAdmin = emailObj => async dispatch => {
  try {
    const {data} = await axios.put('/api/users', emailObj)
    console.log('adminUser in admin api', data)
    dispatch(newAdmin(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */

const defaultUser = {}
export default function(state = defaultUser, action) {
  switch (action.type) {
    case ADMIN_USER:
      return action.user

    default:
      return state
  }
}
