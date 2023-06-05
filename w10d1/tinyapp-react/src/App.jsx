import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [urls, setUrls] = useState(null);

  const login = () => {
    axios
      .post("http://localhost:3000/login.json", {
        email: "ninja@ninja.com",
        password: "1234",
      })
      .then((res) => res.data)
      .then((data) => setUser(data));
  };
  const fetchUrls = () => {
    axios
      .get("http://localhost:3000/urls.json")
      .then((res) => res.data)
      .then((data) => setUrls(data));
  };

  return (
    <>
      <button onClick={login}>Log in</button>
      <button onClick={fetchUrls}>Fetch Urls</button>
    </>
  );
}

export default App;
