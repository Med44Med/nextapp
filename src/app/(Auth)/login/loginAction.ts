"use server";

import axios from 'axios'
import {createSession} from '../../../lib/Session'

export async function action(prevState: unknown, formData: FormData) {
    const {email,password} = Object.fromEntries(formData)
    try {
        const response = await axios.post('http://localhost:3000/api/login',{ email, password })
        const {id,role} = response?.data?.data
        await createSession(id,role)
        const status = response?.status
        const data = response?.data
        return ({status,...data});
        
    } catch (error) {
        return {error}
    }
    
}
