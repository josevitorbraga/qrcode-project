import mongoose from "mongoose";
const { Schema, model } = mongoose;

const childSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Parent",
  },
});

const Child = model("Child", childSchema);
export default Child;
