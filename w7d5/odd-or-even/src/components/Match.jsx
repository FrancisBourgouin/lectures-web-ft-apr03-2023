import MatchResult from "./MatchResult";
import MatchForm from "./MatchForm";

export default function Match(props) {
  const { players, runMatch, isMatchFinished, isWin, resetMatch } = props;
  return (
    <section className="Match">
      {!isMatchFinished && <MatchForm players={players} onSubmit={runMatch} />}
      {isMatchFinished && <MatchResult isWin={isWin} resetMatch={resetMatch} />}
    </section>
  );
}
