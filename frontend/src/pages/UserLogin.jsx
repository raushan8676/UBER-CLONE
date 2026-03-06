import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({
            email: email,
            password: password
        })
        console.log(userData);

        setEmail('')
        setPassword('')
    }

    return (
        // bg-cover bg-center bg-[url(https://tb-static.uber.com/prod/udam-assets/5152cc71-a5b0-4fbd-aeb8-bee896efcd48.png)]
        <div className=' p-7 h-screen flex flex-col justify-between'>

            <div>
                <img className='w-16 mb-10 font-bold' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />

                <form onSubmit={(e)=> submitHandler(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="password"
                        placeholder='Password'
                    />

                    <button className='flex items-center justify-center w-full bg-black text-white py-2 rounded mt-5 mb-2'>Login</button>
                </form>

                <p className='text-center'>New Here ? <Link to='/user-signup' className='text-blue-600'>Create new Account</Link></p>
            </div>

            <div>
                <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center w-full text-white py-3 rounded mt-5'>sign-in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin