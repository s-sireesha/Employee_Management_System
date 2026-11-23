import mongoose from "mongoose";
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB database connected......")
    } catch (error) {
        console.log("DB connection failed", error.message);
        process.exit(1);
    }
}

export default ConnectDB;