import Click from '../presentations/Click'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
console.log('sb')
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('dispatch', dispatch)
  return {
    onClickAdd: (inputValue) => {
      dispatch(actions.doTimeout(inputValue))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  return {
    timeoutValue: state.timeoutValue
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Click)

export default AddTodo
