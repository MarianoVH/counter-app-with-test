import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const addValue = () => setCounter(counter + 1);
  const subtractValue = () => setCounter(counter - 1);
  const reset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={addValue}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={subtractValue}>-1</button>
    </>
  );
};

CounterApp.propType = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 0,
};
