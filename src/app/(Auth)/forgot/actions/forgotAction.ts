"use server";



const forgotURL = "http://localhost:3000/api/users/forgot"

type stateType = {
    error?:{email?:string};
    status?:number;
    message?:string;
}

export async function forgot(prevState: unknown , formData: FormData) : Promise<stateType> {
    
    console.log(prevState,formData,forgotURL);
    
    return ({message:'hello from forgot'});
}
