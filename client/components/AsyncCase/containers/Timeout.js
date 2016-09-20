import Click from '../presentations/Click'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import 'immutable'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickAdd: (inputValue) => {
      dispatch(actions.doTimeout(inputValue))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    timeoutValue: state.timeoutValue
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Click)

export default AddTodo
