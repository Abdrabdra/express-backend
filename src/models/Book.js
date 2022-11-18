import mongoose from "mongoose";

const Book = new mongoose.Schema({
  userid: { type: "ObjectId", ref: "User" },
  hotelid: { type: "ObjectId", ref: "Hotel" },
  personCount: { type: Number, required: true },
  arrivalDate: { type: String, required: true }, // Нужно потом изменить тип на "Date"
  departureDate: { type: String, required: true }, // Нужно потом изменить тип на "Date"
});

export default mongoose.model("Book", Book);
