import React, { useEffect } from "react";
import "./App.css";
import axios from "axios"; // Import axios instead of node-fetch

function App() {
  useEffect(() => {
    axios
      .get("/INR/game/record")
      .then((response) => console.log(response)) // Handle response as needed
      .catch((error) => console.error(error)); // Handle errors
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>hAha site ping go BrRRR</p>
      </header>
    </div>
  );
}

export default App;
