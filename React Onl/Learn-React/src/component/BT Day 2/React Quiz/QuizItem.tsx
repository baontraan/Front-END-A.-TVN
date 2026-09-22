import type { IQuizData } from "./QuizData";

interface IQuizItemProps {
  quiz: IQuizData;
  funcAnswer(isCorrect: boolean): void;
}

const QuizItem = ({ quiz, funcAnswer }: IQuizItemProps) => {
  const bgColors = ["bg-blue-600", "bg-green-500", "bg-red-500", "bg-gray-700"];
  return (
    <div className="text-center mt-10">
      <h1 className="text-6xl font-medium">Câu {quiz.questionText}</h1>

      <div className="flex flex-col gap-6 mt-15">
        {quiz.answerOptions.map((item, index) => (
          <button
            key={index}
            onClick={() => funcAnswer(item.isCorrect)}
            className={`min-w-70 mx-auto  py-3 px-5 text-lg border border-gray-200 bg-blue-600 rounded-xl text-white hover:opacity-85 transition-all duration-300 cursor-pointer ${bgColors[index]}`}
          >
            {item.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizItem;
