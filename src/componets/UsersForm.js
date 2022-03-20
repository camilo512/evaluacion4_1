import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'


const UsersForm = ({getUsers, userSelected, deselectUser}) => {
    
    const { register, handleSubmit, reset } = useForm();

 
    useEffect(() =>{
        if(userSelected){
            const userSelectedMod = {
                    email:userSelected.email,
                    password:userSelected.password,
                    first_name:userSelected.first_name,
                    last_name:userSelected.last_name,
                    birthday:userSelected.birthday
                }
            reset(userSelectedMod)
        }
    }, [userSelected, reset])

    const submit = (data, clean) =>{

        const alertUpdate = (user) =>{
            Swal.fire({
                title: 'Are you sure to Update?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes !'
              }).then((result) => {
                if (result.isConfirmed) {
                    updateUser(user)
                  Swal.fire(
                    'Updated!',
                    'The user has been Updated.',
                    'success'
                  )
                }
              })
        }


        const alertPut = (user) =>{
            putteUser(user)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }

        const updateUser = (user)=>{
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then(() => {
                getUsers();
                deselectUser();
            })
        }

        const putteUser = (user)=>{
            axios.post('https://users-crud1.herokuapp.com/users/' , user)
            .then(() => getUsers());
        }
    
    
      
        const user = {
            email:data.email,
            password:data.password,
            first_name:data.first_name,
            last_name:data.last_name,
            birthday:data.birthday
        }

            if(userSelected){
                alertUpdate(user)
            }else{
                alertPut(user)
            }
            clean.target.reset();
    }
 
    return (
        <div className='users-form animate__animated animate__fadeInDown' > 
      
            <form onSubmit={handleSubmit(submit)} >
                
                <input 
                type="text"
                name='email'
                placeholder='Email'
                {...register("email")}
                />

                <input 
                type="text"
                name='password'
                placeholder='Password'
                {...register("password")}
                />
          
                <input 
                type="text"
                name='first_name'
                placeholder='First Name'
                {...register("first_name")}

                />
                <input 
                type="text"
                name='last_name'
                placeholder='last Name'
                {...register("last_name")}

                />
                <input 
                type="date"
                name='birthday'
                placeholder='Birthday'
                {...register("birthday")}
                />
                
                <input  
                type="submit"
                value="submit"
                />
      
            </form>
        </div>


    );
};

export default UsersForm;