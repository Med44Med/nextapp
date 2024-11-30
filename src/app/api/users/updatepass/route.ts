import connectionToDB from "../../../../lib/db/connection";
import User,{IUser} from "../../../../lib/db/models/User";
import { NextResponse, NextRequest } from 'next/server'
import bcryptjs from 'bcryptjs'


export async function PUT(req: NextRequest){
    
try {
    await connectionToDB();
    const {id,oldpass,newpass} = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const user : IUser | null = await User.findById(id);
    if(!user){return NextResponse.json({message:"Somthing wrong"},{status:500})}

    const checkPassword = bcryptjs.compareSync(oldpass,user.password)
    if(!checkPassword){return NextResponse.json({message:"Wrong password"},{status:500})}
    
    const hashedPassword = bcryptjs.hashSync(newpass, 10);

    const updatedUser : IUser | null = await User.findByIdAndUpdate(id, { $set: { password: hashedPassword } });
    if (!updatedUser) {
      return NextResponse.json(
        { message: "User not found or update failed" },
        { status: 404 }
      );
    }
    
    const updatedData = {
      id:updatedUser._id.toString(),
      role:updatedUser.role
    }
    
    return NextResponse.json({message:"password updated successfully",updatedData},{status:200})

  } catch (error) {
    console.log(error);
    return NextResponse.json({message:"somthing wrong",error},{status:500})
    
}



}