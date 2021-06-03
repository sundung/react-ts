import React, { Component } from 'react'

import Lee from './components/Lee'
class App extends Component<any, any> {
  render() {
    return (
      <div>
        <Lee
          name={'刘得花'}
          age={18}
          user={{ name: '星星', age: 18, sex: '男' }}
        />
      </div>
    )
  }
}

export default App
