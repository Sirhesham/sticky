import mongoose from "mongoose";

const connetDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};
export default connetDB;
