import React, { Component } from 'react'

import Lee from './Lee'
class App extends Component<any, any> {
  render() {
    return (
      <div>
        你好
        <Lee name={'孙志强'} />
      </div>
    )
  }
}

export default App
