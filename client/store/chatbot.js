import axios from 'axios'

/**
 * ACTION TYPES
 */
const AGENT = 'AGENT'

/**
 * ACTION CREATORS
 */
const addAgent = agent => ({type: AGENT, agent})
export const clearExample = () => ({type: AGENT, agent: {}})
/**
 * THUNK CREATORS
 */

export const getAgent = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/chatbot')

    dispatch(addAgent(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */

const defaultAgent = {}
export default function(state = defaultAgent, action) {
  switch (action.type) {
    case AGENT:
      return action.agent

    default:
      return state
  }
}
