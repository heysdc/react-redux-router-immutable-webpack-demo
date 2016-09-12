import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducer/rootReducer'
import App from './App'

let store = createStore(reducers)

const NewTodoList = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default NewTodoList
