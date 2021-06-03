import React, { Component } from 'react'

interface Iprops {
  name: string
  age?: number
}
class Lee extends Component<Iprops, any> {
  render() {
    return (
      <div>
        {this.props.name}
        <hr />
        {this.props.age}
      </div>
    )
  }
}

export default Lee
