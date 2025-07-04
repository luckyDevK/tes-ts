import mongoose from "mongoose";

// Bind the schema loosely (matches any document)
const Place = mongoose.model(
  "Place",
  new mongoose.Schema({}, { strict: false })
);

export default Place;
