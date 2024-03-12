import axios from 'axios'

const URL = 'http://localhost:8000'


export const signUpRequest = async (formData: any)=>{
    const response =  await axios.post(`${URL}/sign`, formData)
    console.log(response)
}