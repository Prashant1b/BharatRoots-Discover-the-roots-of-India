import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Cardroute from "./Route/card.route.js";
import Quizroute from "./Route/quiz.route.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // ✅ must have this

mongoose.connect(process.env.MongoDBURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB:", err.message));

app.use("/Iconic", Cardroute);
app.use("/Quizzes", Quizroute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
