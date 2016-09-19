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
