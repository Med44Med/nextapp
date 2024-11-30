import connectionToDB from "../../../../lib/db/connection";
import User from "../../../../lib/db/models/User";
import { NextResponse, NextRequest } from 'next/server'
import { IUser } from '../../../../lib/db/models/User';


export async function PUT(req: NextRequest){
    
try {
    await connectionToDB();
    const data = await req.json();
    const {id,...rest} = data
    
    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    if (Object.keys(rest).length === 0) {
      return NextResponse.json(
        { message: "No fields to update were provided" },
        { status: 400 }
      );
    }
    
    const updatedUser : IUser | null = await User.findByIdAndUpdate(
      id,
      {$set:rest},
      {new:true}
    );
    
    if (!updatedUser) {
      return NextResponse.json(
        { message: "User not found or update failed" },
        { status: 404 }
      );
    }

    const updatedData  = {
        username: updatedUser.username,
        firstname: updatedUser.firstname,
        lastname: updatedUser.lastname,
        birthdate: updatedUser.birthdate,
        gender: updatedUser.gender,
        wilaya: updatedUser.wilaya,
        commune: updatedUser.commune,
        address:updatedUser.address,
        tel:updatedUser.tel,
        id:updatedUser._id.toString(),
        role:updatedUser.role,
        createdAt:updatedUser.createdAt,
        updatedAt:updatedUser.updatedAt
      };
    return NextResponse.json({message:"updated successfully",updatedData},{status:200})
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {message:"somthing wrong",error},
      {status:500}
    )
    
}



}