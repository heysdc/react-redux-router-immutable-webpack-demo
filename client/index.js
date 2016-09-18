import React from 'react'
import ReactDOM from 'react-dom'
import NewTodoList from './components/NewTodoList'
import { Router, Route, IndexRoute } from 'react-router'
// import Test from './components/Test'
import { Provider } from 'react-redux'
import AsyncCase from './components/AsyncCase'
import { store, history } from './initialStore'

class World extends React.Component {
  render () {
    return <Provider store={store}>
      <Router history={history}>
        <Route path='/view/'>
          <IndexRoute component={NewTodoList} />
          <Route path='/view/timeout' component={AsyncCase} />
        </Route>
      </Router>
    </Provider>
  }
}

ReactDOM.render(<World />, document.getElementById('root'))
