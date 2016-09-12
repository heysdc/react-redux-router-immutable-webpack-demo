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
