import { useState } from "react";

export default function RepoForm(props) {
  const initialValues = { owner: "", repo: "" };
  const [formData, setFormData] = useState(initialValues);

  const { onSubmit } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="owner" onChange={handleChange} value={formData.owner} />
      <input type="text" name="repo" onChange={handleChange} value={formData.repo} />
      <button data-testid="button">Fetch commits!</button>
    </form>
  );
}
