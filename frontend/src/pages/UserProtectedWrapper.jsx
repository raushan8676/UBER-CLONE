import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {userDataContext} from '../context/UserContext'
import axios from 'axios'

const UserProtectedWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const {user , setUser} = React.useContext(userDataContext) 
    const [isLoading , setIsLoading] = React.useState(true)
    

    useEffect(() => {
        if(!token){
            navigate('/user-login')
        }
    }, [token, navigate])

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        if(response.status === 200){
            setUser(response.data.user)
            setIsLoading(false)
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        localStorage.removeItem('token')
        navigate('/user-login')
    });
    

    if(isLoading){
        return <div>Loading...</div>
    }


  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper