import React, { Component } from 'react'

import Lee from './components/Lee'

import State from './components/State'
import UserList from  './components/UserList'
class App extends Component<any, any> {
  render() {
    return (
      <div>
        <Lee
          name={'刘得花'}
          age={18}
          user={{ name: '星星', age: 18, sex: '男' }}
        />
        <State />
          <hr/>
          <UserList></UserList>
      </div>
    )
  }
}

export default App
