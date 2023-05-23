import "./App.css";
import Header from "./components/Header";
import NewQuestionForm from "./components/NewQuestionForm";
import QuestionForm from "./components/QuestionForm";
import Score from "./components/Score";

import { questionsArr } from "./mocks/questionsData";

import useQuiz from "./hooks/useQuiz";
import { useReducer, useState } from "react";
import quizReducer from "./reducers/quizReducer";

function App() {
  // const { question, validateAnswer, addNewQuestion, score } = useQuiz(questionsArr);

  // const {
  //   sendMessage,
  //   broadcastMessage,
  //   sendPrivateMessage,
  //   ..
  // }

  const initialState = {
    questions: questionsArr,
    currentIndex: 0,
    goodAnswers: 0,
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);

  const score = state.currentIndex ? state.goodAnswers / state.currentIndex : null;
  const { question } = state.questions[state.currentIndex % state.questions.length];

  const addQuestion = (formData) => dispatch({ type: "ADD_QUESTION", payload: formData });
  const validateAnswer = (formData) =>
    dispatch({ type: "VALIDATE_ANSWER", payload: formData });

  return (
    <div className="App">
      <Header />
      <QuestionForm question={question} onSubmit={validateAnswer} />
      <NewQuestionForm onSubmit={addQuestion} />
      <Score score={score} />
    </div>
  );
}

export default App;

// Connect
// Disconnect
// Send a message
// Receivge a message
// Send a private message
// Receive a private message
// Broadcast..
