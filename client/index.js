import React from 'react'
import ReactDOM from 'react-dom'
import NewTodoList from './components/NewTodoList'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import Test from './components/Test'
import reducers from './reducers'
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

class World extends React.Component {
  render () {
    return <Provider store={store}>
      <Router history={history}>
        <Route path='/view/'>
          <IndexRoute component={NewTodoList} />
          <Route path='/view/test' component={NewTodoList} />
        </Route>
      </Router>
    </Provider>
  }
}

ReactDOM.render(<World />, document.getElementById('root'))
