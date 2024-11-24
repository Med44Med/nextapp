import connectionToDB from "../../../../lib/db/connection";
import User from "../../../../lib/db/models/User";
import { NextResponse, NextRequest } from 'next/server'



export async function POST(req: NextRequest){
    try {
       
        await connectionToDB();

        const {id,imageUrl} = await req.json();

        console.log(id,imageUrl);
        
        const user = await User.findByIdAndUpdate(id,{$set:{avatar:imageUrl}},{new:true});
        if (!user) { return NextResponse.json({ message: "somthing went wrong"},{status:410}); }
           
        return NextResponse.json({message:'avatar changed successfuly',avatar:user.avatar},{status:200})

    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}

