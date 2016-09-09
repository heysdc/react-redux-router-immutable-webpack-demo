import React from 'react'
import ReactDOM from 'react-dom'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { fromJS } from 'immutable'
import Test from './components/Test'
import TodoList from './components/TodoList/Index'

@immutableRenderDecorator
class World extends React.Component {
  state = {
    data: fromJS({
      title: 'Hello, world!'
    })
  }

  render () {
    return <div>
      <input type='text' />
      <Test
        value='sb'
      />
      <TodoList />
    </div>
  }
}

ReactDOM.render(<World />, document.getElementById('root'))
