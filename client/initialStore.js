import * as reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import initialState from './initialState'
import { syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'

const logger = createLogger({
  stateTransformer: (state) => {
    state = state.toJS()
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
// import appReducer from './reducers/app-reducer'
import routerReducer from './reducers/router-reducer'
console.log('ssb', {
  ...reducers,
  routing: routerReducer
})
const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
})
// const initialState = Immutable.Map()

const loggerMiddleware = logger

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

/* Create enhanced history object for router */
const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS
  return (state) => {
    const routingState = state.get('routing') // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }
    return prevRoutingStateJS
  }
}

const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: createSelectLocationState()
})

export { store, history }
