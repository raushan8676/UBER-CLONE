import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const UserSignup = () => {

    const[firstName, setFirstName]=useState('')
    const[lastName, setLastName]=useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setUserData({
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        })
        console.log(userData);

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }


    return (
        <div className=' p-7 h-screen flex flex-col justify-between'>

            <div>
                <img className='w-16 mb-10 font-bold' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />

                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-base font-medium mb-2'>What's your name</h3>
                    <div className='flex gap-4 mb-5'>
                        <input
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
                            type="text"
                            placeholder='first name'
                        />

                        <input
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
                            type="text"
                            placeholder='last name'
                        />
                    </div>

                    <h3 className='text-base font-medium mb-2'>What's your email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                        type="email"
                        placeholder='email@example.com'
                    />

                    <h3 className='text-base font-medium mb-2'>Enter Password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="password"
                        placeholder='Password'
                    />

                    <button className='flex items-center justify-center w-full bg-black text-white py-2 rounded mt-5 mb-2'>Signup</button>
                </form>

                <p className='text-center'>Already have a account ? <Link to='/user-login' className='text-blue-600'>Login here</Link></p>
            </div>

            <div>
                <p className='text-[10px] font-bold'>By signing up you agree to our <span className='text-blue-600'>Terms of Service</span> and <span className='text-blue-600'>Privacy Policy</span></p>
            </div>
        </div>
    )
}

export default UserSignup