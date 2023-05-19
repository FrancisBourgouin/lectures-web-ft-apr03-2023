import { useState } from "react";

import Match from "./components/Match";
import Player from "./components/Player";
import Header from "./components/Header";

import "./App.scss";

import { playersArr } from "./mocks/playerData";

function App() {
  const [players, setPlayers] = useState(playersArr);
  const [matchFinished, setMatchFinished] = useState(false);
  const [win, setWin] = useState(undefined);

  const addPlayer = (name) => {
    const id = `${players.length + 1}`;
    const newPlayer = { id, name, wins: 0 };

    setPlayers([...players, newPlayer]);
  };
  const runMatch = (formData) => {
    console.log(formData);
    const player1Num = Math.ceil(Math.random() * 2);
    const player2Num = Math.ceil(Math.random() * 2);

    const isEven = (player1Num + player2Num) % 2 === 0;
    const result = isEven ? "even" : "odd";

    if (result === formData.choice) {
      const player1Index = players.findIndex((player) => player.id === formData.player1);
      const player1 = { ...players[player1Index] };
      player1.wins++;

      const updatedPlayers = [...players];
      updatedPlayers[player1Index] = player1;

      setPlayers(updatedPlayers);
      setWin(true);
      setMatchFinished(true);
    } else {
      const player2Index = players.findIndex((player) => player.id === formData.player2);
      const player2 = { ...players[player2Index] };
      player2.wins++;

      const updatedPlayers = [...players];
      updatedPlayers[player2Index] = player2;

      setPlayers(updatedPlayers);
      setWin(false);
      setMatchFinished(true);
    }

    // if (result === formData.choice) {
    //   const player1 = { ...players[formData.player1] };
    //   player1.wins++;

    //   const updatedPlayers = { ...players, [formData.player1]: player1 };
    // }
  };

  const resetMatch = () => {
    setWin(undefined);
    setMatchFinished(false);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Player players={players} addPlayer={addPlayer} />
        <Match
          runMatch={runMatch}
          players={players}
          isMatchFinished={matchFinished}
          isWin={win}
          resetMatch={resetMatch}
        />
      </main>
    </div>
  );
}

export default App;
