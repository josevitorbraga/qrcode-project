import mongoose from "mongoose";
import shortid from "shortid";
const { Schema, model } = mongoose;

const parentSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  cpf: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone1: {
    type: String,
    required: true,
  },
  phone2: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  children: [
    {
      type: String,
      ref: "Child",
    },
  ],
});

const Parent = model("Parent", parentSchema);
export default Parent;
