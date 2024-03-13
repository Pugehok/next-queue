

import {useState} from 'react'

interface SignData {
    email: string,
    password: string
}



export const useAuth = () =>{
    const [formData, setFormData] = useState<SignData>({
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
    }

    return {formData,handleChange, handleSubmit}
}