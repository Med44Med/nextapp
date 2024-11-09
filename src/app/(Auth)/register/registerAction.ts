"use server";

import { z } from "zod";
import axios from 'axios'
import { createSession, deleteSession } from "../../../lib/Session";
import { redirect } from "next/navigation";



  
  const registerSchema = z.object({
    username: z.string().min(6,{ message: "min 6 lettrs"}).max(10,{ message: "max 10 lettrs"}),
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .trim(),
  });

  export async function register(prevState: unknown, formData: FormData) {
      const result = registerSchema.safeParse(Object.fromEntries(formData));
      
      if (!result.success) { return { errors : result.error.flatten().fieldErrors }}
    
    
    try {
        await axios.post("http://localhost:3000/api/register",result.data)
    } catch (error) {
       console.log(error.response.data.message);
       return {errors : error.response.data.message }
       
    }
    
}