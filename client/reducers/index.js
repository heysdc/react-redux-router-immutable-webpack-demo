import * as actions from '../actions'
// import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          value: action.info.value,
          id: action.info.id
        }
      ]
    default:
      return state
  }
}

const reducers = {
  todos
}

export default reducers
