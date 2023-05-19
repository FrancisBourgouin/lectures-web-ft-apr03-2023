import PlayerForm from "./PlayerForm";
import PlayerList from "./PlayerList";

export default function Player(props) {
  const { players, addPlayer } = props;
  return (
    <section className="Player">
      <PlayerList players={players} />
      <PlayerForm onSubmit={addPlayer} />
    </section>
  );
}
