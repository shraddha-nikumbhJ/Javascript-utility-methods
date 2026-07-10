import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true); // only the fields defined in the schema will be saved to the database

  //if DB is already connected then dont connect again
  if (connected) {
    console.log("Already connected to DB");
    return;
  }
  console.log("Connecting to DB...", process.env.MONGODB_URI);
  //connect to mongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};
export default connectDB;
