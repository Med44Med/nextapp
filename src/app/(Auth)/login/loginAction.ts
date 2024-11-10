"use server";

import axios from 'axios'
import { redirect } from "next/navigation";


export async function login(prevState: unknown, formData: FormData) {
    const {email,password} = Object.fromEntries(formData)

    console.log({email,password})
    await   axios.post('http://localhost:3000/api/login',{ email, password })
                 .then( redirect('/dashboard'))
                 .catch((error)=>{console.log(error)})

    
}
