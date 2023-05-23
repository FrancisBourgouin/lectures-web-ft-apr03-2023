import { useState } from "react";
import useWow from "./useWow";

export default function useQuiz(questionData) {
  const [questions, setQuestions] = useState(questionData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [amountOfGoodAnswers, setAmountOfGoodAnswers] = useState(0);

  const { sayWow } = useWow();

  const score = currentQuestionIndex ? amountOfGoodAnswers / currentQuestionIndex : null;
  const currentQuestion = questions[currentQuestionIndex % questions.length];

  const addNewQuestion = (formData) => {
    const newQuestion = { id: questions.length, ...formData };
    // const newQuestion = {id: questions.length, question:formData.question, answer:formData.answer}
    setQuestions([...questions, newQuestion]);
  };

  const validateAnswer = (formData) => {
    const { answer } = formData;

    if (currentQuestion.answer === answer) {
      setAmountOfGoodAnswers(amountOfGoodAnswers + 1);
      sayWow();
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return {
    question: currentQuestion.question,
    validateAnswer,
    addNewQuestion,
    score,
  };
}
