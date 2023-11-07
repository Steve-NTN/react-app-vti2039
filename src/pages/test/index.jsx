import { useDispatch, useSelector } from "react-redux";
import { onDecreaseCounter } from "../../redux/actions/counterActions";

const Counter = () => {
  const counter = useSelector((state) => state?.counter?.counter);
  const dispatch = useDispatch();

  const onDecrease = () => {
    dispatch(onDecreaseCounter());
  };

  const onIncrease = () => {
    dispatch({ type: "counter/increase" });
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

const CounterChild = () => {
  return (
    <div>
      <CounterSubChild />
    </div>
  );
};

const CounterSubChild = () => {
  const counter = useSelector((state) => state?.counter?.counter);
  const dispatch = useDispatch();

  const onDecrease = (value) => {
    dispatch({ type: "counter/decreaseWithNumber", payload: value });
  };

  return (
    <div>
      {counter}
      <br />
      <button onClick={() => onDecrease(5)}>Decrease with 5</button>
      <button onClick={() => onDecrease(10)}>Decrease with 10</button>
    </div>
  );
};

export default Counter;
