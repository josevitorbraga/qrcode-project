import mongoose from "mongoose";
import shortid from "shortid";
const { Schema, model } = mongoose;

const childSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    ref: "Parent",
  },
});

const Child = model("Child", childSchema);
export default Child;
