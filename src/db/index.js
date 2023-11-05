
// import mongoose from "mongoose";
const { default: mongoose } = require('mongoose');
const { default: DB_NAME } = require('../constants.js');

// import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionIntance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
    );
    console.log(
      `\n MONGO CONNECTED !! DB_HOST: ${connectionIntance.connection.host}`,
    );
  } catch (error) {
    console.log("MONGO CONNECTION ERROR", error);
    process.exit(1);
  }
};

export default connectDB;
