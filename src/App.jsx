import React, { useEffect } from "react";
import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const url = "https://api.coincap.io/v2/assets/";
  const [data, setData] = useState([]);

  useEffect(() => getToServer(), []);
  const getToServer = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setData(ele))
      .catch((ele) => console.log(ele));
  };
  console.log(data);
  return (
    <div>
      <Navbar />
      <div>
        <LandingPage />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
