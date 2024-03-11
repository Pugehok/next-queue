'use client'
import { lock, email } from "../../../assets"
import Image from "next/image"
import React, { useState } from "react";
interface SignUp {
    email: string;
    password: string;
}

export default function Signup() {

    const [formData, setFormData] = useState<SignUp>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }
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
                            placeholder="Enter your email" />
                        <Image src={email} alt="Email Icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                    </div>
                    <div className="flex flex-col items-center relative">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full h-10 px-5 py-3 border-2 border-main-lightgray rounded-lg pl-10"
                            placeholder="Enter your email" />
                        <Image src={lock} alt="password" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                    </div>
                    <div className="flex flex-col items-center relative">
                        <input
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full h-10 px-5 py-3 border-2 border-main-lightgray rounded-lg pl-10"
                            placeholder="Enter your email" />
                        <Image src={lock} alt="password" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                    </div>
                    <button
                        type="submit"
                        className="bg-main-blue text-main-white py-3 px-6 rounded-lg hover:bg-main-darkblue"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}
