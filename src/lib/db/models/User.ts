import mongoose ,{Schema,Document,Model} from "mongoose"

interface IUserModel extends Document {
    username:string;
    email:string;
    password:string;
    createdAt:Date;
    updatedAt:Date;
 }

const userSchema :Schema<IUserModel> = new Schema({
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
const User:Model<IUserModel> = mongoose.models.User || mongoose.model<IUserModel>('hello', userSchema) 
export default  User