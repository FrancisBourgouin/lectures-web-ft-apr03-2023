import { useState } from "react";

export default function MatchForm(props) {
  const { players, onSubmit } = props;

  const defaultData = {
    player1: "",
    player2: "",
    choice: "",
  };
  const [formData, setFormData] = useState(defaultData);

  const handleChange = (event) => {
    const { value, name } = event.target;

    // const newFormData = { ...formData };
    // newFormData[name] = value;

    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.player1 && formData.player2 && formData.choice) {
      onSubmit(formData);
    }
  };

  const parsedPlayer1Options =
    Array.isArray(players) &&
    players.map((player) => (
      <option key={player.id} value={player.id}>
        {player.name}
      </option>
    ));

  const remainingPlayers =
    Array.isArray(players) && players.filter((player) => player.id !== formData.player1);

  const parsedPlayer2Options = remainingPlayers.map((player) => (
    <option key={player.id} value={player.id}>
      {player.name}
    </option>
  ));

  return (
    <form className="MatchForm" onSubmit={handleSubmit}>
      <select name="player1" onChange={handleChange} value={formData.player1}>
        <option>Please choose a player</option>
        {parsedPlayer1Options}
      </select>
      <select name="player2" onChange={handleChange} value={formData.player2}>
        <option>Please choose a player</option>
        {parsedPlayer2Options}
      </select>
      <select name="choice" onChange={handleChange} value={formData.choice}>
        <option>Please choose odd or even</option>
        <option value="odd">Odd!</option>
        <option value="even">Even!</option>
      </select>
      <button>Start the match!</button>
    </form>
  );
}
