import React from 'react'

const Click = ({timeoutValue, onClickAdd}) => {
  const add = (e) => {
    e.preventDefault()
    onClickAdd(inputNode.value)
  }
  console.log('timeoutValue', timeoutValue, onClickAdd)
  let inputNode = null
  return <div>
    {timeoutValue}
    <form onSubmit={add}>
      <input ref={(node) => { inputNode = node }} />
      <button type='sbumit'>添加</button>
    </form>
  </div>
}

export default Click
