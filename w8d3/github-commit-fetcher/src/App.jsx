import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import CommitList from "./components/CommitList";
import RepoForm from "./components/RepoForm";

import mockData from "./mocks/commitData.json";

function App() {
  const [commits, setCommits] = useState(null);

  const fetchCommits = (formData) => {
    setTimeout(() => {
      setCommits(mockData);
    }, 1000);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <RepoForm onSubmit={fetchCommits} />
        <CommitList commits={commits} />
      </main>
    </div>
  );
}

export default App;
