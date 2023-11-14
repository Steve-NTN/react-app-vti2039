// const

import { createContext, useContext, useState } from "react";

const Context = createContext();

const TestContext = () => {
  const [name, setName] = useState("");

  const onClearName = () => {
    setName("");
  };

  return (
    <Context.Provider value={{ name, setName }}>
      <div>
        Test context
        <br />
        <TestContextChild />
        <br />
        <button onClick={onClearName}>Clear name</button>
      </div>
    </Context.Provider>
  );
};

const TestContextChild = () => {
  const { name, setName } = useContext(Context);

  return (
    <div>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e?.target?.value)}
      />

      <TestContextSubChild />
    </div>
  );
};

const TestContextSubChild = () => {
  const { name } = useContext(Context);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default TestContext;
