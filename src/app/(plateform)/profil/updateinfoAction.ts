"use server"
import axios from 'axios'
import {createSession} from '../../../lib/Session'
import { z } from "zod";


const updatePassSchema = z.object({
  oldpass: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" })
            .trim(),
  newpass: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" })
            .trim(),
  renewpass : z
                .string()
    
}).superRefine((data, ctx) => {
  if (data.newpass !== data.renewpass) {
      ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "The passwords do not match.",
          path: ["renewpass"]
      });
  }
});



export async function update(prevState: unknown, formData: FormData) {
  const data = Object.fromEntries(formData)

  


function filter(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== "" && value !== undefined && value!== null) {
          acc[key] = typeof value === 'object' ? filter(value) : value;
      }
      return acc;
  }, {});
}

const filteredData = filter(data)
try {
  const response = await axios.put('http://localhost:3000/api/updateinfo',filteredData)
  const {id,role} = response?.data?.data
  await createSession(id,role)
  const status = response?.status
  const data = response?.data
  return ({status,...data});
} catch (error) {
  return ({error})
}
}

export async function updatePass(prevState: unknown, formData: FormData) {

  const {id} =Object.fromEntries(formData);

  const result = updatePassSchema.safeParse(Object.fromEntries(formData));
  
  if (!result.success) { return { errors : result.error.flatten().fieldErrors }}
  
  const data = {
    id,
    oldpass:result.data.oldpass,
    newpass:result.data.newpass
  }

  try {
    const response = await axios.put('http://localhost:3000/api/updatepass',data);
    const {id,role} = response?.data?.data
    await createSession(id,role)
    const status = response?.status
  return ({status});
  } catch (error) {
    return ({error})
  }
}
        