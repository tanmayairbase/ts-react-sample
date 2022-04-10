import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Footer} from "./Footer";

function App() {
  const [loading, setLoading] = useState(false);
  console.log("app init")

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? "loading" : ""}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 18?
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
