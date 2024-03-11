import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../utils/AuthContext';

export const SignUp = () => {
    const { registerUser } = useAuth()
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleInputs = (event) => {
        event.preventDefault();
        setUserData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }))
    }

    const signUp = async () => {
        registerUser(userData);
    }

    return (
        <div className='grid sm:grid-cols-2 grid-cols-1 h-[100vh]'>
            <div className='max-sm:hidden flex flex-col justify-center items-center bg-primary'>
                <h3 className='font-bold text-[3rem] mb-2'>Welcome</h3>
                <h3 className='text-lg'>To Competitive Gaming</h3>
            </div>
            <div className='p-8 flex flex-col justify-center'>
                <div className='w-[90%] self-center'>
                    <h2 className='mb-6 text-[1.8rem] font-bold'>Register Now!</h2>
                    <div className='flex flex-col'>
                        <input name='name' onChange={handleInputs} className='bg-transparent border-[1px] border-primary border-opacity-80 rounded-[3px] mb-3 placeholder:text-sm px-3 py-2 focus:outline-none text-[0.9rem]' type="text" placeholder='Full Name' />
                        <input name='email' onChange={handleInputs} className='bg-transparent border-[1px] border-primary border-opacity-80 rounded-[3px] mb-3 placeholder:text-sm px-3 py-2 focus:outline-none text-[0.9rem]' type="email" placeholder='Email' />
                        <input name='password' onChange={handleInputs} className='bg-transparent border-[1px] border-primary border-opacity-80 rounded-[3px] mb-3 placeholder:text-sm px-3 py-2 focus:outline-none text-[0.9rem]' type="password" placeholder='Password' />
                        <button onClick={signUp} className='bg-primary px-3 py-2 rounded-[3px]'>Sign Up</button>
                    </div>
                    <div className='mt-5 flex flex-col'>
                        <label htmlFor="" className='text-center'>or</label>
                        <button className='bg-white text-dark text-[0.9rem] px-3 py-2 rounded-[3px] mt-4 flex justify-center items-center gap-2'>
                            <span><img className='h-5' src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" /></span>
                            <span>Continue With Google</span>
                        </button>
                        <label htmlFor="" className='text-center text-sm mt-4'>Already Have An Account? <span className='text-gray-500'><Link to={'/login'}>Login</Link></span></label>
                    </div>
                </div>
            </div>
        </div>
    )
}
