import useForm from "../hooks/useForm";

export default function NewQuestionForm(props) {
  const { onSubmit } = props;

  const initialValues = {
    question: "",
    answer: "",
  };

  const [formData, handleChange, handleSubmit] = useForm(initialValues, onSubmit);

  return (
    <form className="NewQuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="question"
        placeholder="Enter the question"
        onChange={handleChange}
        value={formData.question}
      />
      <input
        type="text"
        name="answer"
        placeholder="Enter the answer"
        onChange={handleChange}
        value={formData.answer}
      />
      <button>Add question</button>
    </form>
  );
}
