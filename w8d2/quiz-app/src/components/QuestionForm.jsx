import useForm from "../hooks/useForm";

export default function QuestionForm(props) {
  const { onSubmit, question } = props;

  const [formData, handleChange, handleSubmit] = useForm({ answer: "" }, onSubmit);

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <p>{question}</p>
      <input
        type="text"
        name="answer"
        placeholder="Type your answer!"
        onChange={handleChange}
        value={formData.answer}
      />
      <button>Check answer</button>
    </form>
  );
}
