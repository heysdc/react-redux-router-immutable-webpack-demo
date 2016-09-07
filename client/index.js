import React from 'react'
import ReactDOM from 'react-dom'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { fromJS } from 'immutable'
import { createStore } from 'redux'
import reducers from './components/public/reducers'
import * as action from './components/public/action'

@immutableRenderDecorator
class World extends React.Component {
  state = {
    data: fromJS({
      title: 'Hello, world!'
    })
  }

  store = createStore(reducers)

  unSubscribeAdd = this.store.subscribe(() => {
    console.log(this.store.getState())
  })

  add () {
    this.store.dispatch(action.addTodo('sb'))
  }

  render () {
    return <div>
      <input type='text' />
      <button onClick={this.add.bind(this)}>确认</button>
      <button onClick={this.unSubscribeAdd}>remove</button>
    </div>
  }
}

ReactDOM.render(<World />, document.getElementById('root'))
