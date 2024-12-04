import mongoose, { Document, Schema, Model, models } from 'mongoose';


export interface IUser extends  Document {
    _id: mongoose.Types.ObjectId;
    role:string;
    username:string;
    email:string;
    activeCode:number;
    activated:boolean;
    password:string;
    avatar?:string;
    createdAt:Date;
    updatedAt:Date;
    firstname?:string;
    lastname?:string;
    gender?:string;
    wilaya?:string;
    commune?:string;
    address?:string;
    birthdate?:Date;
    tel:string;
 }

 


const userSchema : Schema = new mongoose.Schema<IUser>(
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
            activeCode:{
                type:Number,
                default:""
            },
            activated:{
                type:Boolean,
                default:false
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

const User: Model<IUser> = models.User || mongoose.model<IUser>('User',userSchema);

export default  User