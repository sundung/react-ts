import React, {Component} from 'react';

interface IUser {
    id:number
    name:string
}
interface Istate {
    userList:IUser[]
}
class UserList extends Component <any, Istate> {
    constructor(props:any,context:any) {
        super(props,context);
        let userList:IUser[] = []
        for (let i = 0; i < 20; i++) {
            userList.push({
                id:1,
                name:'userList' + i
            })
        }
        this.state = {
            userList:userList
        }
    }
    render() {
        return (
            <div>
                {/*{this.state.userList}*/}
                {this.state.userList.map(item => (
                    <li key={item.id}>item</li>
                ))}
            </div>
        );
    }
}

export default UserList;