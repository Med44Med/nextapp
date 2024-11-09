import  mongoose from "mongoose";

const connectionToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to database");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectionToDB;