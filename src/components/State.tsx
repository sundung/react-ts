import React, { Component } from 'react'

interface Istate {
  count: number
}
interface Iprops {
  name: string
}
export default class state extends Component<Iprops, Istate> {
  constructor(props: any, context: any) {
    super(props, context)
    this.state = {
      count: 0,
    }
  }
  // 生命周期
  componentDidMount() {
    // 注意 state 有可能是异步的
    // for (let i = 0; i < 100; i++) {
    //   this.setState({
    //     count: this.state.count + 1,
    //   })
    // }

    // 这样写是正确的
    for (let i = 0; i < 100; i++) {
      this.setState((state, props) => ({
        // 注意 箭头函数 的 this 指向
        count: state.count + 1,
      }))
    }
  }
  render() {
    return (
      <div>

        <div>{this.state.count}</div>
        <hr />
        <div>{this.props.name}</div>

      </div>
    )
  }
}
