import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import PlantListItem from "./components/PlantListItem";

import Gundam from "./components/Gundam";

function Logo(props) {
  const logo = props.src;

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      {props.children}
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  console.log(logo);

  return (
    <div className="App">
      <header className="App-header">
        <Gundam />
        <PlantListItem />
        <Logo src={logo}>
          <h1>Wiggle wiggle - {count}</h1>
        </Logo>
        <p onClick={() => setCount(count + 1)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// PlantListItem Expects this format of data:
// const exampleData = {
//   name: "Some Plant",
//   type: "Leafy",
//   lastWatered: "Wed, 17 May 2023 14:57:14 GMT",
// };
