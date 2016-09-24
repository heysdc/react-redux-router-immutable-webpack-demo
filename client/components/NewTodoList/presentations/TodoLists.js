import React from 'react'
import Test from './Test'

const TodoLists = ({todos, onClickAdd}) => {
  const add = (e) => {
    e.preventDefault()
    onClickAdd(inputNode.value)
  }
  let inputNode = null
  return <div>
    <ul>
      {
        todos.map((value) => (<li key={value.id}>{value.value}</li>))
      }
    </ul>
    <form onSubmit={add}>
      <input ref={(node) => { inputNode = node }} />
      <button type='sbumit'>添2加</button>
    </form>
    <Test />
  </div>
}

export default TodoLists
