export const ADD_TODO = 'add_todo'

let id = 0
export function addTodo (text) {
  return {
    type: ADD_TODO,
    info: {
      value: text,
      id: id++
    }
  }
}

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export function selectSubreddit (subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function invalidateSubreddit (subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'

export function requestPosts (subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receivePosts (subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const TIME_OUT_ADD = 'TIME_OUT_ADD'

export function changeTimeoutValue (text) {
  return {
    type: TIME_OUT_ADD,
    value: text
  }
}

export function doTimeout (text) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(changeTimeoutValue(text))
    }, 2000)
  }
}
