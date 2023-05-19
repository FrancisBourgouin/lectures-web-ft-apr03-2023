export default function PlayerList(props) {
  const { players } = props;

  const parsedPlayers =
    Array.isArray(players) &&
    players.map((player) => (
      <li key={player.id}>
        {player.name} - {player.wins ? `${player.wins} wins` : `No wins yet!`}
      </li>
    ));

  return <ul className="PlayerList">{parsedPlayers}</ul>;
}
