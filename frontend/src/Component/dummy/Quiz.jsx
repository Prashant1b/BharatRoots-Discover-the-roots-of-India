import React, { useState, useEffect } from "react";
import "./Quiz.css";

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showHindi, setShowHindi] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false); // ✅ new state

  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch("http://localhost:5002/Quizzes");
        const data = await response.json();

        // Shuffle options for each question
        const shuffledData = data.map((q) => ({
          ...q,
          options: shuffleArray(q.options),
        }));

        setQuizData(shuffledData);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, []);

  const handleOptionClick = (option) => setSelectedOption(option);

  const handleNext = () => {
    const current = quizData[currentQuestion];

    // Find the correct answer from the options array
    const correctOption = current.options.find((opt) => opt.isCorrect);
    const correctAnswer = showHindi ? correctOption.hi : correctOption.en;

    if (
      selectedOption.trim().toLowerCase() ===
      correctAnswer.trim().toLowerCase()
    ) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption("");
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption("");
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setShowResult(false);
    setShowQuiz(false);
    setShowExplanations(false); // ✅ reset explanations
  };

  const handleEndQuiz = () => {
    const confirmEnd = window.confirm(
      "Are you sure you want to end the quiz? Your progress will be submitted."
    );
    if (confirmEnd) {
      setShowResult(true);
    }
  };

  if (loading) return <p className="quiz-loading">Loading quiz...</p>;

  if (quizData.length === 0)
    return (
      <p className="quiz-loading">
        <h2>No Quiz Scheduled for Today</h2>
        <p>Check back tomorrow! Our quizzes take place every Saturday.</p>
        <p>
          Next Topic for Quiz is <b>Varanasi (Kashi) – India</b>. Read Full
          Article for better score and test your knowledge.
        </p>
      </p>
    );

  const question = quizData[currentQuestion];
  const progress =
    ((currentQuestion + (showResult ? 1 : 0)) / quizData.length) * 100;

  return (
    <div className="quiz-container">
      {/* Start Screen */}
      {!showQuiz && !showResult && (
        <div className="quiz-start-card">
          <h2 className="quiz-title">🇮🇳 Weekly Heritage Quiz</h2>
          <p className="quiz-subtitle">
            Challenge yourself and test your knowledge of India's culture and
            temples!
          </p>
          <button className="quiz-start-btn" onClick={() => setShowQuiz(true)}>
            Start Quiz
          </button>
        </div>
      )}

      {/* Quiz Interface */}
      {showQuiz && !showResult && (
        <div className="quiz-card">
          {/* End Quiz button */}
          <div className="quiz-top-bar">
            <button className="quiz-end-btn" onClick={handleEndQuiz}>
              End Quiz ✖
            </button>
          </div>

          {/* Progress Bar */}
          <div className="quiz-progress">
            <div
              className="quiz-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Question */}
          <div className="quiz-question-box">
            <h3>
              Question {currentQuestion + 1} / {quizData.length}
            </h3>
            <p className="question-text">
              {question.question_en}
              <br />
              <span className="question-hindi">{question.question_hi}</span>
            </p>
          </div>

          {/* Options */}
          <div className="quiz-options">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                className={`quiz-option ${
                  selectedOption === opt.en || selectedOption === opt.hi
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleOptionClick(showHindi ? opt.hi : opt.en)}
              >
                <span className="opt-en">{opt.en}</span>
                <br />
                <span className="opt-hi">{opt.hi}</span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="quiz-nav">
            <button
              className="quiz-btn prev"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              Prev
            </button>
            <button
              className={`quiz-btn next ${!selectedOption ? "disabled" : ""}`}
              onClick={handleNext}
              disabled={!selectedOption}
            >
              {currentQuestion === quizData.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}

      {/* Result Screen */}
      {showResult && (
        <div className="quiz-result">
          <h2>🎉 Quiz Completed!</h2>
          <p>
            Your Score: <strong>{score}</strong> / {quizData.length}
          </p>

          {/* ✅ Button to show explanations */}
          {!showExplanations && (
            <button
              className="quiz-explanation-btn"
              onClick={() => setShowExplanations(true)}
            >
              📘 Read Explanations
            </button>
          )}

          {/* ✅ Show explanations after click */}
          {showExplanations && (
            <div className="quiz-result-explanations">
              <h3>Answers & Explanations</h3>
              {quizData.map((q, idx) => (
                <div key={idx} className="quiz-explanation-item">
                  <p className="question-text">
                    <strong>Q{idx + 1}:</strong> {q.question_en}
                    <br />
                    <span className="question-hindi">{q.question_hi}</span>
                  </p>
                  <p className="correct-answer">
                    ✅ Correct Answer: <strong>{q.answer_en}</strong>
                    <br />
                    <span className="answer-hindi">{q.answer_hi}</span>
                  </p>
                  <p className="explanation-text">
                    💡 {q.explanation_en}
                    <br />
                    <span className="explanation-hindi">{q.explanation_hi}</span>
                  </p>
                </div>
              ))}
            </div>
          )}

          <button className="quiz-restart-btn" onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
