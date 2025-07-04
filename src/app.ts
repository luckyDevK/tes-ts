import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Place from "./models/places"; // path to your model file

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Hello u can deploy" });
});

app.get("/places", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const places = await Place.find(); // This fetches all documents
    res.status(200).json({ places });
  } catch (err) {
    console.error("Failed to fetch places:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;
