import React, { Component } from 'react'

interface Iusers {
  name: string
  sex: string
  age: number
}

interface Iprops {
  name: string
  age?: number
  user: Iusers
}
class Lee extends Component<Iprops, any> {
  render() {
    return (
      <div>
        {this.props.name}
        <hr />
        {this.props.age}
        <hr />
        {this.props.user.name}
      </div>
    )
  }
}

export default Lee
