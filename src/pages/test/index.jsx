import { memo, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onDecrease = () => {
    setCounter(counter - 1);
  };

  const onIncrease = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>Counter</h1>

      <div style={{ display: "flex", gap: 24 }}>
        <button onClick={onDecrease}>Decrease</button>
        <p>{counter}</p>
        <button onClick={onIncrease}>Increase</button>
      </div>

      <br />
      <CounterChild />
    </div>
  );
};

const CounterChild = memo(() => {
  console.log("render 1");
  return (
    <div>
      {console.log("render 2")}
      <CounterSubChild />
      Hello world
    </div>
  );
});

const CounterSubChild = () => {
  return (
    <div>
      {/* {counter} */}
      <br />
      {/* <button onClick={() => onDecrease(5)}>Decrease with 5</button>
      <button onClick={() => onDecrease(10)}>Decrease with 10</button> */}
    </div>
  );
};

export default Counter;
