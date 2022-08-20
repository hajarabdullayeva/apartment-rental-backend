import mongoose from "../db";

const Dates = new mongoose.Schema({
  checkIn: Date,
  checkOut: Date,
  adults: Number,
  kids: Number,
});

export default mongoose.model("Dates", Dates);
