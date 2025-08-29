import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
    },
    age: {
      type: String,
    },
    isAlive:{
      type:Boolean,
    },
    email:{
      type:String,
    },
    password:{
      type:String,
    }
  })