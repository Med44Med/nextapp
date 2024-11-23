import { Document, Model } from "mongoose";
import * as Mongoose from "mongoose";


interface IUser {
    role:string;
    username:string;
    email:string;
    password:string;
    avatar:string;
    createdAt:Date;
    updatedAt:Date;
    firstname:string;
    lastname:string;
    gender:string;
    wilaya:string;
    commune:string;
    address:string;
    tel:string;
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
            },
            role:{
                type:String,
                default:"user"
            },
            avatar:{
                type:String,
                default:""
            },
            firstname:{
                type:String,
                default:""
            },
            lastname:{
                type:String,
                default:""
            },
            gender:{
                type:String,
                default:""
            },
            birthdate:{
                type:Date,
                default:""
            },
            wilaya:{
                type:String,
                default:""
            },
            commune:{
                type:String,
                default:""
            },
            address:{
                type:String,
                default:""
            },
            tel:{
                type:String,
                default:""
            },
        },
        {
            timestamps:true
        }
)

interface IUserDocument extends IUser, Document{}
type IUserModel = Model<IUserDocument>

const User: IUserModel = Mongoose.models.nextUser || Mongoose.model<IUserDocument>("nextUser", userSchema);

export default  User