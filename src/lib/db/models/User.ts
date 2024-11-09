import { Document, Model } from "mongoose";
import * as Mongoose from "mongoose";


interface IUser {
    username:string;
    email:string;
    password:string;
    createdAt:Date;
    updatedAt:Date;
 }

 


const userSchema = new Mongoose.Schema(
        {
            username:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            password:{
                type:String,
                required:true
            }
        },
        {
            timestamps:true
        }
)

interface IUserDocument extends IUser, Document{}
type IUserModel = Model<IUserDocument>

const User: IUserModel = Mongoose.models.nextUser || Mongoose.model<IUserDocument>("nextUser", userSchema);

export default  User