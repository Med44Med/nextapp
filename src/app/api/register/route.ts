import connectionToDB from "../../../lib/db/connection";
import User from "../../../lib/db/models/User";
import { NextResponse, NextRequest } from 'next/server'


 interface IUser  {
    username:string;
    email:string;
    password:string;

 }

export async function POST(req: NextRequest){
    try {
       
        

        await connectionToDB();

        const {username,email,password} = await req.json();
        const user = new User({username,email,password});
        
        console.log(user);
        
        await user.save()

        
        return NextResponse.json({message:'user created successfuly'},{status:201})

    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}