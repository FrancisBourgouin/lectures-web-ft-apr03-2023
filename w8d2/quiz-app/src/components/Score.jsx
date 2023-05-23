export default function Score(props) {
  const { score } = props;
  return (
    <section className="Score">
      <h1>Current Score</h1>
      {score && <p>{Math.round(score * 100)}%</p>}
      {!score && <p>No questions answered yet!</p>}
    </section>
  );
}
