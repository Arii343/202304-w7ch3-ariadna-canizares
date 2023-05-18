import { Schema, model, Types } from "mongoose";

const itemSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Item = model("Item", itemSchema, "items");

export default Item;
