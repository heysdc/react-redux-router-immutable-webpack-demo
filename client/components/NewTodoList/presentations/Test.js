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
      try {
        yield console.log('sb')
        yield console.log('ss')
      } catch (e) {
        console.log('内部', e)
      }
    }
    var b = a()
    b.next()
    try {
      b.throw('sb')
    } catch (e) {
    }
    console.log('goon')
    b.next()
  }

  render () {
    return <div>
      {this.state.a}
      <button onClick={this.handleClick.bind(this)}>试一下11</button>
    </div>
  }
}
