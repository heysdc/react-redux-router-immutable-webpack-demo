import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../public/reducers'
import App from './App'

let store = createStore(todoApp)

const TodoList = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default TodoList
