import {deleteSession} from "../../../lib/Session"
import { NextResponse } from 'next/server'

export async  function GET(){

    await deleteSession()  
       
    return NextResponse.json({message:'logout successfuly'},{status:200})
}