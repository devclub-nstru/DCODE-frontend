import React from "react";
import "./App.css";
import Squares from "./Squares";
const BackgroundComponent = () => {
    return (
      <div className="background">
        <Squares/>
      </div>
    );
  };
  
  export default function App() {
    return (
        <BackgroundComponent />
    );
  }
