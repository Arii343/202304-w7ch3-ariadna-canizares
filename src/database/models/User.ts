import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    min: 3,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

export const User = model("User", userSchema, "users");
