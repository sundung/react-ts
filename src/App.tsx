import React, { Component } from 'react'

import Lee from './components/Lee'
class App extends Component<any, any> {
  render() {
    return (
      <div>
        <Lee name={'刘得花'} />
        <Lee name={'刘得花'} age={18} />
      </div>
    )
  }
}

export default App
