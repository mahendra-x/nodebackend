const { default: connectDB } = require('./db/index.js');

require('dotenv').config({ path: "./env"})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// import dotenv from "dotenv";



// const app = express();

// dotenv.config({ path: "./env" });

connectDB();

/*

(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("APP is listing at ", process.env.PORT);
    });
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();
*/
