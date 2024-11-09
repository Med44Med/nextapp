"use server";

import { z } from "zod";
import { createSession, deleteSession } from "../../../lib/Session";
import { redirect } from "next/navigation";

const testUser = {
    id: "1",
    email: "contact@cosdensolutions.io",
    password: "12345678",
  };
  
  const loginSchema = z.object({
    username: z.string().min(6,{ message: "min 6 lettrs"}).max(10,{ message: "max 10 lettrs"}),
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .trim(),
  });

  export async function register(prevState: any, formData: FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            errors : result.error.flatten().fieldErrors,
        }
    } else {
        console.log(result.data);
        createSession(result.data.username)
        
    }
    
}