import React from 'react'
import ReactDOM from 'react-dom'
import NewTodoList from './components/NewTodoList'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Test from './components/Test'

class World extends React.Component {
  render () {
    return <Router history={browserHistory}>
      <Route path='/view/'>
        <IndexRoute component={Test} />
        <Route path='/view/test' component={NewTodoList} />
      </Route>
    </Router>
  }
}

ReactDOM.render(<World />, document.getElementById('root'))
