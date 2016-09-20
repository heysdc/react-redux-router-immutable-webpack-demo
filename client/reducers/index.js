import * as actions from '../actions'
import initialState from '../initialState'
import Immutable from 'immutable'
// import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return Immutable.fromJS([
        ...state,
        {
          value: action.info.value,
          id: action.info.id
        }
      ])
    default:
      return state
  }
}

const timeoutValue = (state = '', action) => {
  switch (action.type) {
    case actions.TIME_OUT_ADD:
      return action.value
    default:
      return state
  }
}

export {
  todos,
  timeoutValue
}
