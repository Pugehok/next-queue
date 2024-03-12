import axios from 'axios'

const URL = 'http://localhost:8000'


export const AXIOS_SignUpRequest = async (formdata: any)=>{
    const response =  await axios.post(`${URL}/sign`)
    console.log(response)
}