import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const login = async (data) => {
        setError('');
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div  className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#150833] to-[#3D207F]">
            <div style={{background: 'radial-gradient(circle at 0% 30%, rgb(255, 255, 255), rgb(255 255 255 / 0%) 40%, rgb(249 249 249 / 63%) 100%), 20% center rgb(255 255 255 / 44%)'}} 
             className="mx-auto w-full max-w-lg rounded-xl shadow-lg p-8 border">
                <div className="mb-6 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-semibold text-gray-800">Sign in to your account</h2>
                <p className="mt-2 text-center text-sm text-gray-900">
                    Don't have an account?&nbsp;
                    <Link to="/signup" className="font-medium text-[#13072E] hover:underline">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="mt-8 space-y-6">
                    <Input
                        label="Email:"
                        placeholder="Enter your email"
                        type="email"
                        {...register('email', {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    'Email address must be a valid address',
                            },
                        })}
                    />
                    <Input
                        label="Password:"
                        type="password"
                        placeholder="Enter your password"
                        {...register('password', { required: true })}
                    />
                    <Button type="submit" className="w-full bg-[#655cad] text-white transition duration-200 hover:bg-[#13072e]">
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default login;
