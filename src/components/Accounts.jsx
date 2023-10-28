import { useContext } from "react";
import Account from "./Account";
import styled from "styled-components";
import { AdminContext } from "../pages/admin";

const Accounts = () => {
  const { accounts = [] } = useContext(AdminContext);

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
            <th>Create at</th>
            <th>Edit</th>
            <th>Delele</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, i) => (
            // <People people={p} key={i} {...{ onClickEdit }} />
            <Account account={account} key={i} />
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
