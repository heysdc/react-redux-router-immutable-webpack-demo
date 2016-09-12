import React from 'react'
import ReactDOM from 'react-dom'
import NewTodoList from './components/NewTodoList'

class World extends React.Component {

  render () {
    return <div>
      <NewTodoList />
    </div>
  }
}

ReactDOM.render(<World />, document.getElementById('root'))
