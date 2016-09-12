// import React from 'react'
import TodoLists from '../presentations/TodoLists'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickAdd: (inputValue) => {
      dispatch(actions.addTodo(inputValue))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  return {
    todos: state.todos
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoLists)

export default AddTodo
