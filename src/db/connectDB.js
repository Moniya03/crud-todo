import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}?authSource=admin`
    );
    console.log(
      `MongoDB Connected! DB Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("DB Connection Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
