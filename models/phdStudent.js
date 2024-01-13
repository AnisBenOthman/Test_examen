import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PhdstudentSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rafik: {
    type: Number,
    required: true,
  },
});

export default model("PhdStudent", PhdstudentSchema);
