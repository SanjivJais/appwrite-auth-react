import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../utils/AuthContext'

export const Home = () => {
    const { user, logoutUser } = useAuth()
    return (
        <>
            <nav className="flex justify-between items-center px-20 py-4 border-b-[0.8px] border-opacity-15 border-white">
                <label htmlFor="Logo" className='text-2xl font-bold'>Logo</label>
                <div className='flex justify-center items-center gap-2'>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/login'}><button className={`bg-primary px-3 py-2 rounded-sm ${user ? 'hidden' : ''}`}>Login</button></Link>
                    <Link to={'/login'}><button onClick={logoutUser} className={`bg-primary px-3 py-2 rounded-sm ${user ? '' : 'hidden'}`}>Logout</button></Link>
                </div>
            </nav>
            <div className="px-20 py-6">

                <h2>Hi, {user.name}!</h2>
            </div>

        </>
    )
}
