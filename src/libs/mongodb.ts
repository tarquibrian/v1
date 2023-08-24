import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("DB CONNECTED");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
