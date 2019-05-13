import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import problems from './problems'
import userStats from './userStats'
import admin from './admin'
import agent from './chatbot'
import lesson from './lesson'
import topic from './topic'
import userInput from './userInput'

const reducer = combineReducers({
  user,
  problems,
  userStats,
  admin,
  agent,
  lesson,
  topic,
  userInput
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './problems'
export * from './lesson'
export * from './topic'
