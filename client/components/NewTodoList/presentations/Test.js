import React, { Component } from 'react'

export default class Test extends Component {
  // constructor () {
  //   super()
  //   this.handleClick = this.handleClick.bind(this)
  // }

  state = {
    a: 'a'
  }

  handleClick () {
    this.setState({
      a: 'b'
    })
    // console.log(this.bb)
  }

  componentDidMount () {
    var a = function * () {
      yield 'sb'
    }
    var b = a()
    console.log(b.next())
  }

  render () {
    return <div>
      {this.state.a}
      <button onClick={this.handleClick.bind(this)}>试一下</button>
    </div>
  }
}
