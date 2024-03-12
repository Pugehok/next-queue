
'use client'


import {useState} from 'react'
import { AXIOS_SignUpRequest } from '../axios/axios'

interface SignUp {
    email: string,
    password: string
}



export const useAuth = () =>{
    const [formData, setFormData] = useState<SignUp>({
        email: "",
        password: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData:any) => ({
            ...prevData,
            [name]: value,
        }))
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AXIOS_SignUpRequest(formData)
            
    }

    return {formData,handleChange, handleSubmit}
}