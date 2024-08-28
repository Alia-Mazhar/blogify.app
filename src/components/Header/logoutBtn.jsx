import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            return dispatch(logout())
        })
    }
    return (
        <button
            className='inline-block relative px-6 py-2 font-semibold text-[#13072E] bg-white rounded-full transition duration-200 hover:bg-[#ffffffd8]'
            onClick={logoutHandler}
        >
            Logout <span className='font-bold my-auto'>&rarr;</span>
        </button>
    )
}

export default LogoutBtn
