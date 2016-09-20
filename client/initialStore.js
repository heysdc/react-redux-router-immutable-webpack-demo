import * as reducers from './reducers'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import initialState from './initialState'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { hashHistory } from 'react-router'
import Immutable from 'immutable'

const logger = createLogger({
  stateTransformer: (state) => {
    let newState = {}

    for (var i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS()
      } else {
        newState[i] = state[i]
      }
    }
    console.log('newState', newState, newState)

    return newState
  }
})

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const loggerMiddleware = logger

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

const history = syncHistoryWithStore(hashHistory, store)

export { store, history }
