import React, {Component} from 'react';
import bg from '../../assets/images/pic.jpeg'
import './index.css'
interface Istate {
    width: number
}

class LearnJsx extends Component<any,Istate> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            width:500
        }
    }
    //改变宽度
    change = () => {
        console.log('111');
        this.setState({
            width:this.state.width + 10
        })
    }
    render() {
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