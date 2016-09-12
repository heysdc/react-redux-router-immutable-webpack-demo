import React from 'react'

const TodoLists = ({todos, onClickAdd}) => {
  const add = (e) => {
    e.preventDefault()
    onClickAdd(inputNode.value)
  }
  console.log('todos', todos, onClickAdd)
  let inputNode = null
  return <div>
    <ul>
      {
        todos.map((value) => (<li key={value.id}>{value.value}</li>))
      }
    </ul>
    <form onSubmit={add}>
      <input ref={(node) => { inputNode = node }} />
      <button type='sbumit'>添加</button>
    </form>
  </div>
}

export default TodoLists
