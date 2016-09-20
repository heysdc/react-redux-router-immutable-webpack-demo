import React from 'react'

const Click = ({timeoutValue, onClickAdd}) => {
  const add = (e) => {
    e.preventDefault()
    onClickAdd(inputNode.value)
  }
  let inputNode = null
  return <div>
    {timeoutValue}
    <form onSubmit={add}>
      <input ref={(node) => { inputNode = node }} />
      <button type='sbumit'>异步2秒后添加</button>
    </form>
  </div>
}

export default Click
