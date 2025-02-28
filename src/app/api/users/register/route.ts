import connectionToDB from "../../../../lib/db/connection";
import User from "../../../../lib/db/models/User";
import { NextResponse, NextRequest } from 'next/server'
import bcryptjs from 'bcryptjs'




export async function POST(req: NextRequest){
    try {
       
        await connectionToDB();

        const {username,email,password} = await req.json();
        if (!username || !email|| !password) { return NextResponse.json({ message: "fields required." },{status:400}); }

        const checkUsers = await User.findOne({ email });
        if (checkUsers) { return NextResponse.json({ message: "email already exists" },{status:410}); }
        
        const checkUsersUsername = await User.findOne({ username });
        if (checkUsersUsername) { return NextResponse.json({ message: "username already exists" },{status:410}); }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const activeCode = Math.floor(Math.random() * 999999)

        
        const user = new User({username,email,password:hashedPassword,activeCode});
        await user.save()

     xtResponse.json({message:'user created successfuly'},{status:201})

    } catch (error) {
        console.log(error);
        return NextResponse.json({error},{status:500})
    }
}