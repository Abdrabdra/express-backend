import mongoose from "mongoose";

const Hotel = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  room: { type: Number, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model("Hotel", Hotel);
