import React from 'react'
import ReactDOM from 'react-dom'
import NewTodoList from './components/NewTodoList'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import Test from './components/Test'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import AsyncCase from './components/AsyncCase'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import initialState from './initialState'

const loggerMiddleware = createLogger()
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

const history = syncHistoryWithStore(browserHistory, store)

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
