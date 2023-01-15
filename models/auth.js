import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String },
  tags: { type: [String] },
  joinedOn: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);

// var mongoose = require("mongoose");

// var UserSchema = new mongoose.Schema(
//   {
//     username: String,
//     email: String,
//     bio: String,
//     image: String,
//     hash: String,
//     salt: String,
//   },
//   { timestamps: true }
// );

// mongoose.model("User", UserSchema);