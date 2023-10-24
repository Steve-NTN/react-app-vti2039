import { useState } from "react";
import Account from "./Account";
import styled from "styled-components";

const Accounts = ({
  onClickEdit,
  onClickDelete,
  accounts = [],
  setSelectedAccount,
}) => {
  const [myInfos, setMyInfos] = useState({
    email: "",
    department: 0,
  });
  const onClickGetInfos = () => {
    // console.log("first");
    // const name = document.getElementById("name");
    // const age = document.getElementById("age");
    // console.log(name?.value, age?.value);

    console.log(myInfos);
  };

  const onChangeField = () => {
    console.log("first");
  };

  // Hàm update chung
  const onChangeCommonField = (updateData = {}) => {
    setMyInfos({ ...myInfos, ...updateData });
  };

  console.log(accounts);

  return (
    <StyledDiv>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Full name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Edit</th>
            <th>Delele</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, i) => (
            // <People people={p} key={i} {...{ onClickEdit }} />
            <Account
              account={account}
              key={i}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              setSelectedAccount={setSelectedAccount}
            />
          ))}
        </tbody>
      </table>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  margin-top: 32px;
`;

export default Accounts;
