import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsersForm from './UsersForm';
import UserTable from './UserTable';

const UserList = () => {

    const [ showForm, setShowForm ] = useState(false);
    const [ users, setUsers] = useState([]);
    const [ userSelected, setUserSelected ] = useState(null);


    const getUsers = () =>{
      axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
    }

    const selectUser = user => setUserSelected(user);
    const deselectUser = user => setUserSelected(null);

    const deleteUser = id => {
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
    }

    useEffect(() => {
      getUsers()
    }, []);

    return (
      <>
        <div className='toolbar'>
        <div className='toolbar-button'>
          <button className='button_success' onClick={() => setShowForm(!showForm)} >
          <i className="fas fa-plus"></i>  New
          </button>
        </div>
      </div>

      {
          showForm &&  <UsersForm  
                        getUsers={getUsers}
                        userSelected={userSelected}
                        deselectUser={deselectUser}
                        />

      }
        <UserTable 
        users={users}
        selectUser={selectUser}
        deleteUser={deleteUser}
        />
      </>
    );
};

export default UserList;