import connectionToDB from "../../../lib/db/connection";
import User from "../../../lib/db/models/User";
import { NextResponse, NextRequest } from 'next/server'
import bcryptjs from 'bcryptjs'



export async function POST(req: NextRequest){
    try {
       
        await connectionToDB();

        const {email,password} = await req.json();

        const user = await User.findOne({ email });
        if (!user) { return NextResponse.json({ message: "email  is wrong!" },{status:410}); }
        
        const checkPassword = bcryptjs.compareSync(password,user.password)
        if (!checkPassword) { return NextResponse.json({ message: "email or password is wrong!" },{status:410}); }

        const data = {
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
            avatar:user.avatar,
            firstname: user.firstname,
            lastname: user.lastname,
            birthdate: user.birthdate,
            gender: user.gender,
            wilaya: user.wilaya,
            commune: user.commune,
            address:user.address,
            tel:user.tel,
            created_at:user.created_at,
            updated_at:user.updated_at
        }
        
        // createSession(data.id.toString(),data.role)
        
        return NextResponse.json({message:'logged successfuly',data},{status:200})

    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}

