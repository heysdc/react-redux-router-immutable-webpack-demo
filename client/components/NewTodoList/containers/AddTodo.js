// import React from 'react'
import TodoLists from '../presentations/TodoLists'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import 'immutable'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickAdd: (inputValue) => {
      dispatch(actions.addTodo(inputValue))
    }
  }
}

var a = {
  a: 'a',
  b: 'b'
}

console.log('aa', {...a})

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos.toJS()
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoLists)

export default AddTodo
