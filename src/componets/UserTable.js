import React from 'react';


const UserTable = ({users}) => {

    return (
        <table>
        <caption className='t_title'> List Users</caption>
        <thead>
            <tr className='t_head'>
                <th>Email</th>
                <th>Password</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birthday</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => (
                    <tr key={user.id} >
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.birthday}</td>
                    <td className='option_table'>
                        <button className='button_edit_circle'>
                        <i className="fas fa-pen"></i>
                        </button>
                        &nbsp;
                        <button className='button_delete_circle'>
                        <i className="fas fa-trash-alt"></i>
                        </button>
                    </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    );
};

export default UserTable;