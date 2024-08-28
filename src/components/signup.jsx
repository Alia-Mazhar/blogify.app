import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const createdUserData = await authService.createAccount(data)
            if (createdUserData) {
                const currentUserData = await authService.getCurrentUser()
                if (currentUserData) {
                    dispatch(login(currentUserData));
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-[#150833] to-[#3D207F]">
            <div style={{background: 'radial-gradient(circle at 0% 30%, rgb(255, 255, 255), rgb(255 255 255 / 0%) 40%, rgb(249 249 249 / 63%) 100%), 20% center rgb(255 255 255 / 44%)'}} 
            className="mx-auto my-10 w-full max-w-lg shadow-lg rounded-xl p-10 border border-gray-200">
                <div className="mb-6 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-3xl font-bold leading-tight text-gray-800">Sign Up to Create Account</h2>
                <p className="mt-2 text-center text-base text-gray-600">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-[#13072e] transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)} className="mt-8 space-y-6">
                    <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button type="submit" className="w-full bg-[#655cad] hover:bg-[#13072e] text-white font-semibold">
                        Create Account
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Signup
