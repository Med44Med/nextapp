import connectionToDB from "../../../../lib/db/connection";
import User from "../../../../lib/db/models/User";
import { NextResponse, NextRequest } from 'next/server'


export async function PUT(req: NextRequest){
    
try {
    await connectionToDB();
    const data = await req.json();
    const {id,...rest} = data
    console.log(rest);
    
    const updatedUser = await User.findByIdAndUpdate(id,{$set:rest},{new:true});
    const updatedData = {
        username: updatedUser.username,
        firstname: updatedUser.firstname,
        lastname: updatedUser.lastname,
        birthdate: updatedUser.birthdate,
        gender: updatedUser.gender,
        wilaya: updatedUser.wilaya,
        commune: updatedUser.commune,
        address:updatedUser.address,
        tel:updatedUser.tel,
        id:updatedUser._id,
        role:updatedUser.role
      };
    return NextResponse.json({message:"updated successfully",updatedData},{status:200})
  } catch (error) {
    console.log(error);
    return NextResponse.json({message:"somthing wrong",error},{status:500})
    
}



}