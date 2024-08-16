import React, { memo, useEffect, useState } from "react";
import CounterComp from "./components/CounterComp";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CounterComp initialVal={10} />
    </div>
  );
}
