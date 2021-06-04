import React, {Component} from 'react';
import bg from '../../assets/images/pic.jpeg'
import './index.css'
interface Istate {
    width: number
}

class LearnJsx extends Component<any,Istate> {

    constructor(props: any, context: any) {
        super(props, context);
        console.log('constructor,1');
        this.state = {
            width:500
        }

    }
    componentDidMount(): void {
        console.log('componentDidMount,挂载时触发 3')
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<Istate>, snapshot?: any): void {
        console.log('componentDidUpdate,页面更新之后触发')
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<Istate>, nextContext: any): boolean {
        return true
    }

    componentWillUnmount(): void {
        console.log('componentWillUnmount 页面卸载时候触发 4')
    }

    //改变宽度
    change = () => {
        console.log('111');
        // this.setState({
        //     width:this.state.width + 10
        // })
        this.setState((state,props) => ({
            width:state.width + 10
            // console.log(this.state)
        }))
    };
    render() {
        console.log('render 2');
        return (
            <div>
                <img src={bg} alt=""/>
                <hr/>
                <img src={require('../../assets/images/pic.jpeg').default} alt=""/>;
                <hr/>
                <div className='title' style={{backgroundColor:"pink",width:`${this.state.width}px`}}>测试css文件</div>
                <hr/>
                <button onClick={this.change}>改变宽度</button>
            </div>
        );
    }
}

export default LearnJsx;