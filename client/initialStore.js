import * as reducers from './reducers'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import initialState from './initialState'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { hashHistory } from 'react-router'
import Immutable from 'immutable'

const middleWare = [thunkMiddleware]

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger')
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
      return newState
    }
  })
  middleWare.push(logger)
}

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    ...middleWare,
    (store) => (dispatch) => (action) => {
      console.log('before', store.getState().todos.toJS())
      const sb = dispatch(action)
      console.log('after', store.getState().todos.toJS())
      return sb
    }
  )
)

const history = syncHistoryWithStore(hashHistory, store)

export { store, history }
