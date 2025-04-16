import { useState, useEffect } from "react";
import Time from "./components/Time/Time";
import Button from "./components/Button/Button";
import styles from "./App.module.scss";

const App = () => {

  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  
  useEffect(() => {
    return () => {
     if(intervalId) clearInterval(intervalId);
    };
    }, []);
  
  const handleStart = () => {
    if (intervalId !== null) return;

    const id = setInterval(() => {
      setTime(prevTime => prevTime + 100);
    }, 100);

    setIntervalId(id);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Stoper</h1>
      <Time timems={time} />
      <div className={styles.buttons}>
        <Button onClick={handleStart}>START</Button>
        <Button onClick={handleStop}>STOP</Button>
        <Button onClick={handleReset}>RESET</Button>
      </div>
    </div>
  );
}

export default App;
