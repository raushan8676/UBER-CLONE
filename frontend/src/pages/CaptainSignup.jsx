import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainSignup = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [color, setColor] = useState('')
    const [plate, setPlate] = useState('')
    const [capacity, setCapacity] = useState('')
    const [Type, setType] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setCaptainData({
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        })
        console.log(captainData);

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className=' p-7 h-screen flex flex-col justify-between '>

            <div>
                <img className='w-16 mb-5 font-bold' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoJcsV2aZSkAm3nmwtyjuiekrT3H5U7pvjQ&s" alt="" />

                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-base font-medium mb-2'>What's your Captain's name</h3>
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

                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Enter Vehicle Details
                    </h3>

                    <div className="space-y-4">  
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm text-gray-600 mb-1">Vehicle Color</label>
                                <input
                                    required
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="bg-gray-100 rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                                    type="text"
                                    placeholder="e.g. Black"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm text-gray-600 mb-1">Vehicle Plate</label>
                                <input
                                    required
                                    value={plate}
                                    onChange={(e) => setPlate(e.target.value)}
                                    className="bg-gray-100 rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                                    type="text"
                                    placeholder="e.g. BR01AB1234"
                                />
                            </div>
                        </div>

                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm text-gray-600 mb-1">Vehicle Capacity</label>
                                <input
                                    required
                                    value={capacity}
                                    onChange={(e) => setCapacity(e.target.value)}
                                    className="bg-gray-100 rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                                    type="number"
                                    placeholder="e.g. 4"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm text-gray-600 mb-1">Vehicle Type</label>
                                <input
                                    required
                                    value={Type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="bg-gray-100 rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                                    type="text"
                                    placeholder="e.g. Sedan"
                                />
                            </div>
                        </div>

                    </div>

                    <button className='flex items-center justify-center w-full bg-black text-white py-2 rounded mt-3 mb-2'>Signup</button>
                </form>

                <p className='text-center'>Already have a account ? <Link to='/captain-login' className='text-blue-600'>Login as a Captain</Link></p>
            </div>

            <div>
                <p className='text-[10px] font-bold mt-20'>By signing up you agree to our <span className='text-blue-600'>Terms of Service</span> and <span className='text-blue-600'>Privacy Policy</span></p>
            </div>
        </div>
    )
}

export default CaptainSignup