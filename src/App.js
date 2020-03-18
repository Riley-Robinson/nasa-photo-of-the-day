import React from "react";
import "./App.css";
import Header from "./components/Header";
import NASACard from "./components/PhotoCard";

function App() {
  return(
    <div className="App">
      <Header/>
      <NASACard/>
    </div>
  );
}

export default App;
