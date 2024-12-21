import connectionToDB from "../../../../lib/db/connection";
import User from "../../../../lib/db/models/User";
import { NextResponse, NextRequest } from 'next/server'
import { decrypt } from '../../../../lib/Session'



export async function POST(req: NextRequest){
    try {
        
        await connectionToDB();
        
        const {token} = await req.json();
        
        if (!token) { return NextResponse.json({ message: "somthing went wrong!" },{status:400}); }
        
        const {id} = decrypt(user)
        // console.log(token);

        // const user = await User.findById(id);
        // if (!user) { return NextResponse.json({ message: "somthing went wrong!" },{status:401}); }
        
        // const data = {
        //     id:user._id.toString(),
        //     username:user.username,
        //     email:user.email,
        //     role:user.role,
        //     avatar:user.avatar,
        //     firstname: user.firstname,
        //     lastname: user.lastname,
        //     birthdate: user.birthdate,
        //     gender: user.gender,
        //     wilaya: user.wilaya,
        //     commune: user.commune,
        //     address:user.address,
        //     tel:user.tel,
        //     createdAt:user.createdAt,
        //     updatedAt:user.updatedAt
        // }
        
        // createSession(data.id.toString(),data.role)
        
        return NextResponse.json({message:'logged successfuly',data},{status:200})

    } catch (error) {
        console.log(error);
        
        return NextResponse.json({error},{status:500})
    }
}
