import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(
        "mongodb+srv://root:dwRSOSYDeg1wQDRd@cluster0.qxrcb.mongodb.net/portfolio"
      );
      console.log("DB CONNECTED");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
