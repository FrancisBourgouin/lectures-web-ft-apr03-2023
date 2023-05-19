import { useState } from "react";

export default function PlayerForm(props) {
  const { onSubmit } = props;

  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setPlayerName(event.target.value);
    if (playerName.length < 5) {
      setError("Name too short");
    } else if (playerName.length > 20) {
      setError("Name too long");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!error) {
      onSubmit(playerName);
      setPlayerName("");
    }
  };

  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={playerName}
        onChange={handleChange}
        name="player"
        placeholder="Enter the player name"
      />
      <button>Add a Player</button>
      <p style={{ color: "red", textAlign: "center" }}>{error}</p>
    </form>
  );
}
