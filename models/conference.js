import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ConferenceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  nbrPaperMax: {
    type: Number,
    required: true,
  },
});

export default model("Conference", ConferenceSchema);
