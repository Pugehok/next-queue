'use client';
import Image from 'next/image';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '@/app/Components/Button';
const SignPage: React.FC = () => {
    const { formData, handleChange, handleSubmit, passwordError, registrationSuccess } = useAuth();

    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-2/6 h-96 bg-main-slate rounded-lg flex flex-col items-center">
                <div className="w-52 h-3.5 bg-main-lightgray rounded-full"></div>
                <h1 className="text-main-white pt-10 text-h5 font-primary">Register</h1>
                <form className="space-y-4 pt-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full h-10 px-5 py-3 border-2 border-main-lightgray rounded-lg pl-10"
                            placeholder="Enter your email"
                        />
                        {/* <Image src={email} alt="Email Icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" /> */}
                    </div>
                    <div className="flex flex-col items-center relative">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full h-10 px-5 py-3 border-2 border-main-lightgray rounded-lg pl-10"
                            placeholder="Enter your password"
                        />
                        {/* <Image src={lock} alt="password" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" /> */}
                    </div>
                    <div className="flex flex-col items-center relative">
                        <input
                            type="password"
                            name="repeatPassword"
                            value={formData.repeatPassword}
                            onChange={handleChange}
                            className={`w-full h-10 px-5 py-3 border-2 border-main-lightgray rounded-lg pl-10 ${passwordError ? 'border-red-500' : ''
                                }`}
                            placeholder="Repeat your password"
                        />
                        {passwordError && <p className="text-red-500">{passwordError}</p>}
                        {/* <Image src={lock} alt="password" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" /> */}
                    </div>
                    {registrationSuccess && <p className="text-green-500">Registration succes</p>}
                    <div className="flex justify-center items-center ">
                        <Button
                            type="submit"
                            intent={'accept'}
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignPage;