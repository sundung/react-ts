import React, {Component} from 'react';

import { Table, Tag, Space,Button } from 'antd';

const { Column, ColumnGroup } = Table;
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

                <Table
                    dataSource={this.state.userList}
                    rowKey={'id'}
                >
                    <Table.Column title={'id'} dataIndex={'id'} />

                    <Table.Column title={'用户名'} dataIndex={'name'}/>

                    <Table.Column title={'管理'}
                        render={(user:IUser) => (
                            <Space>
                                <Button type='primary'>编辑</Button>
                                <Button type='primary' danger>删除</Button>
                            </Space>
                    )}/>
                </Table>
            </div>
        );
    }
}

export default UserList;