import React from "react";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <LandingPage />
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
