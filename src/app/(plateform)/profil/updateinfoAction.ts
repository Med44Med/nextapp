"use server"
import axios from 'axios'
import {createSession} from '../../../lib/Session'
import { z } from "zod";


const updateInfoURl = "http://localhost:3000/api/updateinfo"
const updatePassURl = 'http://localhost:3000/api/updatepass'

type AnyObject = Record<string, unknown>;

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



export async function update(_: unknown, formData: FormData) {
  const data = Object.fromEntries(formData) as Record<string, string>;

  


function filter(obj: AnyObject) : AnyObject {
  return Object.entries(obj).reduce((acc : AnyObject, [key, value]) => {
      if (value !== "" && value !== undefined && value!== null) {
          acc[key] = value;
      }
      return acc;
  }, {});
}

const filteredData = filter(data)
  try {
    const response = await axios.put(updateInfoURl, filteredData);
    const { id, role } = response?.data?.data;
    await createSession(id, role);
    const status = response?.status;
    const data = response?.data;
    return { status, ...data };
  } catch (error : unknown) {
    if (axios.isAxiosError(error)) {
      return { error: error.response?.data || error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}

export async function updatePass(_: unknown, formData: FormData) {

  const {id} =Object.fromEntries(formData);

  const result = updatePassSchema.safeParse(Object.fromEntries(formData));
  
  if (!result.success) { return { errors : result.error.flatten().fieldErrors }}
  
  const data = {
    id,
    oldpass:result.data.oldpass,
    newpass:result.data.newpass
  }

  try {
    const response = await axios.put(updatePassURl,data);
    const {id,role} = response?.data?.data
    await createSession(id,role)
    const status = response?.status
  return ({status});
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: error.response?.data || error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}
        