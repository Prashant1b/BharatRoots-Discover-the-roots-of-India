import express from "express";
import { getQuiz, createQuiz } from "../Controller/Quiz.controller.js";

const router = express.Router();

// Route to get all quizzes
router.get("/", getQuiz);

// Route to create a new quiz
router.post("/", createQuiz);

export default router;
