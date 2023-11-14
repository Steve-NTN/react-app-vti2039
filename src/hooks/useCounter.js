import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const onDecrease = () => {
    setCounter(counter - 1);
  };

  const onIncrease = () => {
    setCounter(counter + 10);
  };
  return {
    counter,
    onDecrease,
    onIncrease,
  };
};

export default useCounter;
