import React from 'react';

class UserList extends React.Component {
    render() {
        const { onMouseOut, user, onMouseEnter } = this.props
        return (
            <tr 
            className={this.props.state} 
            onMouseEnter={() =>{
                onMouseEnter(user);
            }} 
            onMouseOut={() => {
                onMouseOut()
                }}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
            </tr>
        );
    }
}

export default UserList;