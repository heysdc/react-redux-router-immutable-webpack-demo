import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './action'
import { combineReducers } from 'redux'

// Version 1: one function
// todoApp (state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos:
//         [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false
//           }
//         ]
//       })
//     case TOGGLE_TODO:
//       return Object.assign({}, state, {
//         todos: state.todos.map((todo, index) => {
//           if (index === action.index) {
//             return Object.assign({}, todo, {
//               completed: !todo.completed
//             })
//           }
//           return todo
//         })
//       })
//     default:
//       return state
//   }
// }

// // Version2: reducer composition
// todoApp (state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state,
//         {
//           visibilityFilter: action.filter
//         }
//       )
//     case ADD_TODO:
//     case TOGGLE_TODO:
//       return Object.assign({}, state,
//         {
//           todos: this.todo(state.todos, action)
//         }
//       )
//     default:
//       return state
//   }
// }

const todo = (state = [], action) => {
  console.log('state', state, action)
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

// Version3: more seperated
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
// todoApp (state = initialState, action) {
//   return {
//     visibilityFilter: this.visibilityFilter(state.visibilityFilter, action),
//     todos: this.todo(state.todos, action)
//   }
// }

// Version4: combine
const todoApp = combineReducers({
  visibilityFilter: visibilityFilter,
  todos: todo
})

// todoApp (state = {}, action) {
//   return {
//     visibilityFilter: this.visibilityFilter(state.visibilityFilter, action),
//     todo: this.todos(state.todos, action)
//   }
// }

export default todoApp
