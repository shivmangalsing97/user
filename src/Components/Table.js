import React from 'react';
import './MainStyle.css';
import UserList from './UserList';


export class Table extends React.Component {

    render() {
        return (
            <div className="Main-div">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>E-mail</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map(user => {
                                return <UserList 
                                key={user.id} 
                                user={user} 
                                onMouseEnter={this.props.onMouseEnter} 
                                onMouseOut={this.props.onMouseOut} 
                                state={this.props.state} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}