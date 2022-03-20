import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers}) => {
    

    const { register, handleSubmit } = useForm();

    const submit = (data) =>{
        const user = {
            email:data.email,
            password:data.password,
            first_name:data.first_name,
            last_name:data.last_name,
            birthday:data.birthday
        }

        axios.post('https://users-crud1.herokuapp.com/users/' , user)
        .then(() =>{
            getUsers()
        })
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