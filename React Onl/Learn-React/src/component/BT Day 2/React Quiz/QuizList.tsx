import { useState } from "react";
import QuizItem from "./QuizItem";
import { DataQuestion } from "./QuizData";

const QuizList = () => {
  const [score, setScore] = useState<number>(0);

  const [showScore, setShowScore] = useState<boolean>(false);

  const [currentQuiz, setCurrentQuiz] = useState<number>(0);

  const handleAnswer = (isCorrect: boolean): void => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const nextQuiz = currentQuiz + 1;

    if (nextQuiz < DataQuestion.length) {
      setCurrentQuiz(nextQuiz);
    } else {
      setShowScore(true);
    }
  };

  const handleReset = (): void => {
    setScore(0);
    setCurrentQuiz(0);
    setShowScore(false);
  };

  const getRank = (score: number): string => {
    if (score === 5) return "Excellent";
    if (score === 4) return "Great";
    if (score === 3) return "Nice";
    if (score === 2) return "Chicken";
    return "Bad";
  };

  return (
    <div className="container">
      {showScore && (
        <div className="text-center mt-15">
          <h1 className="text-6xl font-medium">
            Kết quả: {score} / {DataQuestion.length}
          </h1>
          <h2 className="text-5xl font-medium mt-10">{getRank(score)}</h2>
          <button
            onClick={handleReset}
            className="py-3 px-5 text-white text-2xl bg-blue-500 mt-10 rounded-3xl min-w-35 cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out"
          >
            Reset
          </button>
        </div>
      )}

      {!showScore && (
        <QuizItem
          quiz={DataQuestion[currentQuiz]}
          funcAnswer={handleAnswer}
        ></QuizItem>
      )}
    </div>
  );
};

export default QuizList;
