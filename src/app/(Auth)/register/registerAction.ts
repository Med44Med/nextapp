"use server";

import { z } from "zod";
import axios from 'axios'

const registerURL = "http://localhost:3000/api/users/register"

type stateType ={
 error?:{
  username?:string[];
  email?:string[];
  password?:string[];
 };
 message?:string;
 status?:number;
 errorApi?:{message:string};

}
  
  const registerSchema = z.object({
    username: z.string().min(6,{ message: "min 6 lettrs"}).max(10,{ message: "max 10 lettrs"}),
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .trim(),
  });


  export async function register(prevState: unknown, formData: FormData) :Promise<stateType> {
      const result = registerSchema.safeParse(Object.fromEntries(formData));
      
      if (!result.success) { return { error : result.error.flatten().fieldErrors }}
    
    
    try {
        const response = await axios.post(registerURL,result.data)
        const status = response?.status
        const message = response?.data.message
        return({status,message})
    } catch (errorApi) {
       return {errorApi}
       
    }
    
}