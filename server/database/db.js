import mongoose from "mongoose";


export const Connection = async () => {
    const URL = "mongodb://localhost:27017/e-commerce";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("db Connected successfully...");
  } catch (error) {
    console.log("Error While connectin with the database", error.message);
  }
};

export default Connection;
