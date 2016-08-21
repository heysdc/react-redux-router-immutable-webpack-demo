import React from 'react'
import ReactDOM from 'react-dom'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { fromJS } from 'immutable'

@immutableRenderDecorator
class World extends React.Component {
	state = {
    data: fromJS({
      title: 'Hello, world!'
    })
  }
  render () {
    console.log('ss', this.state.data.get('title'))
    return <h1>Hello, world!sb</h1>
  }
}

ReactDOM.render(<World />, document.getElementById('root'))
