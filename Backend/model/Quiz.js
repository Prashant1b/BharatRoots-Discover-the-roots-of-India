import mongoose from "mongoose";

// Option Schema — both English and Hindi text
const optionSchema = new mongoose.Schema({
  en: { type: String, required: true }, // English option
  hi: { type: String, required: true }, // Hindi option
  isCorrect: { type: Boolean, default: false } // Marks correct answer
});

// Question Schema — bilingual support
const questionSchema = new mongoose.Schema({
  question_en: { type: String, required: true }, // English question
  question_hi: { type: String, required: true }, // Hindi question
  options: [optionSchema], // Array of bilingual options
  explanation_en: { type: String }, // English explanation
  explanation_hi: { type: String }  // Hindi explanation
});

// Quiz Schema — for full quiz structure
const quizSchema = new mongoose.Schema(
  {
    title_en: { type: String, required: true }, // English title
    title_hi: { type: String },                 // Hindi title
    description_en: { type: String },           // English description
    description_hi: { type: String },           // Hindi description
    author: { type: String },                   // Quiz creator
    questions: [questionSchema],                // Array of bilingual questions
    previewImage: { type: String },             // Optional preview image URL
    fullImage: { type: String }                 // Optional full image URL
  },
  { timestamps: true }
);

// Export the model
const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
