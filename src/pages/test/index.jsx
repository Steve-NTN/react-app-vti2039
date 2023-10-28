import { useEffect, useState } from "react";
import styled from "styled-components";

const Test = (props) => {
  const { color = "#000" } = props;
  let [counter, setCounter] = useState(0);
  let [show, setShow] = useState(false);

  const onChangeCounter = (e) => {
    setCounter(parseInt(e.target.value));
  };

  const onClickAdd = () => {
    setCounter(Math.min(counter + 1, 5));
  };

  const onClickMinus = () => {
    setCounter(Math.max(counter - 1, 0));
  };

  console.log("constructor");

  useEffect(() => {
    let myInterval = setInterval(() => {
      console.log("interval loop");
    }, 1000);

    return () => {
      console.log("unmount");
      window.clearInterval(myInterval);
    };
  }, []);

  return (
    <Main>
      {console.log("render")}
      <button onClick={onClickMinus}>-</button>
      <input value={counter} type="number" onChange={onChangeCounter} />
      <button onClick={onClickAdd}>+</button>

      <button onClick={() => setShow(!show)}>Click show</button>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  button {
    padding: 24px;
  }
  .right_btn {
  }
  .left_btn {
  }
`;

export default Test;
