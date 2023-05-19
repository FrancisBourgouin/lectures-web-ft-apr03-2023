export default function MatchResult(props) {
  const { isWin, resetMatch } = props;

  return (
    <div className="MatchResult">
      {isWin && <h1>You win!</h1>}
      {!isWin && <h1>You lose!</h1>}
      <button onClick={resetMatch}>Play again!</button>
    </div>
  );
}
