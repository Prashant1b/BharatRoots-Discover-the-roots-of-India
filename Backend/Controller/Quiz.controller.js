import Quiz from "../model/Quiz.js";

// Get all quizzes
export const getQuiz = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new quiz
export const createQuiz = async (req, res) => {
    try {
        const newQuiz = new Quiz(req.body);
        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
