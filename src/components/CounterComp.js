import { useState, useEffect, useRef } from "react";
const CounterComp = ({ initialVal }) => {
  const [count, setCount] = useState(initialVal);
  const [isPaused, setIsPaused] = useState(false);
  const timerCount = useRef(null);
  useEffect(() => {
    if (count > 0 && !isPaused) {
      timerCount.current = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerCount.current);
    };
  }, [count, isPaused]);

  const handlePause = () => {
    setIsPaused(true);
    // return clearTimeout(clearTheInterval);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleResume}> Resume</button>
    </>
  );
};

export default CounterComp;
