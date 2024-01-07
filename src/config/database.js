import mongoose from "mongoose";
export const connect = async () => {
  try {
    const response = await mongoose.connect("mongodb://0.0.0.0:27017", {
      dbName: "X",
    });
    if (response) {
      console.log("connected to db");
    }
  } catch (e) {
    console.log(e.message);
  }
};
