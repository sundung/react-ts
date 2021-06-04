import React, { Component } from 'react'

import Lee from './components/Lee'

import State from './components/State'
import LearnJsx from "./components/Learn_jsx";

class App extends Component<any, any> {
  render() {
    return (
      <div>
        <Lee
          name={'刘得花'}
          age={18}
          user={{ name: '星星', age: 18, sex: '男' }}
        />
        <State name={'周星星的state'} />
        <hr/>
        <LearnJsx/>
      </div>
    )
  }
}

export default App
