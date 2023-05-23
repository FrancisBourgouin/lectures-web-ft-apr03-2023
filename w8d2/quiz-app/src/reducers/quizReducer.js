export default function quizReducer(state, action) {
  switch (action.type) {
    case "VALIDATE_ANSWER":
      // action.payload will be an object containing the answer key
      const newState = { ...state };
      const answer = state.questions[state.currentIndex % state.questions.length].answer;
      console.log(action);
      if (answer === action.payload.answer) {
        newState.goodAnswers = state.goodAnswers + 1;
      }

      newState.currentIndex = state.currentIndex + 1;
      return newState;

    case "ADD_QUESTION":
      // action.payload will be an object containing question and answer as keys
      const newQuestion = { id: state.questions.length, ...action.payload };
      const updatedState = { ...state, questions: [...state.questions, newQuestion] };
      return updatedState;
  }
}
