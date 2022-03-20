import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsersForm from './UsersForm';
import UserTable from './UserTable';

const UserList = () => {

    const [ showForm, setShowForm ] = useState(false);
    const [users, setUsers] = useState([])

    const getUsers = () =>{
      axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
    }

    useEffect(() => {
      //paso 2 listar (get) axios para llamar a la api
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
          showForm &&  <UsersForm  getUsers={getUsers}/>

      }
        <UserTable users={users}/>
      </>
    );
};

export default UserList;