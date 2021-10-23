import mongoose from "mongoose";
const { Schema, model } = mongoose;

const parentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Child",
    },
  ],
});

const Parent = model("Parent", parentSchema);
export default Parent;
