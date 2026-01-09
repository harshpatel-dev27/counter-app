/** @format */

import { useState, useEffect } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  const increase = () => setCount((prev) => prev + step);
  const decrease = () => setCount((prev) => Math.max(0, prev - step));
  const reset = () => setCount(0);
  return (
    <div className={`container ${dark ? "dark" : ""}`}>
      <div className="counter-card">
        <div className="header">
          <h1>Counter</h1>
          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? " " : " "}
          </button>
        </div>
        <p className="count animate">{count}</p>
        <div className="step-control">
          <span>Step:</span>
          {[1, 5, 10].map((n) => (
            <button
              key={n}
              className={step === n ? "active" : ""}
              onClick={() => setStep(n)}>
              +{n}
            </button>
          ))}
        </div>
        <div className="buttons">
          <button
            className="btn decrease"
            onClick={decrease}
            disabled={count === 0}>
            −
          </button>
          <button className="btn increase" onClick={increase}>
            +
          </button>
        </div>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default Counter;
