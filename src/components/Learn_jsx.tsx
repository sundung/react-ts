import React, {Component} from 'react';
import bg from '../assets/images/pic.jpeg'
class LearnJsx extends Component<any,any> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            img: bg,
        }
    }
    render() {
        return (
            <div>
                <img src={this.state.img} alt=""/>
                <hr/>
                <img src={require('../assets/images/pic.jpeg').default} alt=""/>
            </div>
        );
    }
}

export default LearnJsx;