import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

    const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [captainData, setCaptainData] = useState({})
    
        const submitHandler = (e) => {
            e.preventDefault()
            setCaptainData({
                email: email,
                password: password
            })
            console.log(captainData);
    
            setEmail('')
            setPassword('')
        }

  return (
     <div className=' p-7 h-screen flex flex-col justify-between'>

            <div>
                <img className='w-16 mb-5 font-bold' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoJcsV2aZSkAm3nmwtyjuiekrT3H5U7pvjQ&s" alt="" />

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

                <p className='text-center'>Register as a captain ? <Link to='/captain-signup' className='text-blue-600'>Create new Account</Link></p>
            </div>

            <div>
                <Link to='/user-login' className='bg-[#d5622d] flex items-center justify-center w-full text-white py-3 rounded mt-5'>sign-in as user</Link>
            </div>
        </div>
  )
}

export default CaptainLogin