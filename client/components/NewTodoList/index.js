import React from 'react'
import AddTodo from './containers/AddTodo'
import { Link } from 'react-router'

const NewTodoList = () => (
  <div>
    <AddTodo />
    <Link to='/timeout'>Timeout</Link>
  </div>
)

export default NewTodoList
