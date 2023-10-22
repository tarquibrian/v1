import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

const connectMongo = async () => {
  try {
    if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI);
      console.log("DB CONNECTED");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
