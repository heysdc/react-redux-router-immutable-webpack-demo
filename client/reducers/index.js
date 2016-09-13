import * as actions from '../actions'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

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

const selectedSubreddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case actions.SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case actions.INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case actions.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case actions.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case actions.INVALIDATE_SUBREDDIT:
    case actions.RECEIVE_POSTS:
    case actions.REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
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

const reducers = combineReducers({
  todos,
  routing: routerReducer,
  selectedSubreddit,
  postsBySubreddit,
  timeoutValue
})

export default reducers
