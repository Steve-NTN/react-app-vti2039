import { useState } from "react";
import styled from "styled-components";

const Test = (props) => {
  const { color = "#000" } = props;
  let [counter, setCounter] = useState(0);

  const onChangeCounter = (e) => {
    setCounter(parseInt(e.target.value));
  };

  const onClickAdd = () => {
    setCounter(Math.min(counter + 1, 5));
  };

  const onClickMinus = () => {
    setCounter(Math.max(counter - 1, 0));
  };

  console.log(counter, typeof counter);

  return (
    <Main>
      <button onClick={onClickMinus}>-</button>
      <input value={counter} type="number" onChange={onChangeCounter} />
      <button onClick={onClickAdd}>+</button>
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
