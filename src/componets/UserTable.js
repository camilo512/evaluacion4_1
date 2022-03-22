import React from 'react';
import Swal from 'sweetalert2'


const UserTable = ({users, selectUser, deleteUser}) => {
    
    const alertDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure to Delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(id)
              Swal.fire(
                'Deleted!',
                'The user has been deleted.',
                'success'
              )
            }
          })
    }
    

    return (
        <table>
        <caption className='t_title'> List Users</caption>
        <thead>
            <tr className='t_head'>
                <th>Email <i className="fas fa-envelope"></i></th>
                {/* <th>Password <i className="fas fa-lock"></i></th> */}
                <th>First Name <i className="fas fa-user-friends"></i></th>
                <th>Last Name <i className="fa fa-user-friends"></i></th>
                <th>Birthday <i className="fas fa-birthday-cake"></i></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => (
                    <tr key={user.id} >
                    <td>{user.email}</td>
                    {/* <td>{user.password}</td> */}
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.birthday}</td>
                    <td className='option_table'>

                        <button className='button_edit_circle' onClick={() => selectUser(user)}>
                        <i className="fas fa-pen"></i>
                        </button>

                        &nbsp;

                        <button className='button_delete_circle' onClick={() => alertDelete(user.id)}>
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