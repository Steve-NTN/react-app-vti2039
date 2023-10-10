import styled from "styled-components";
import { accounts } from "./mockdata";

const Admin = () => {
  console.log(accounts);

  return (
    <Main>
      <button className="add_account_btn">Create new account</button>

      
      Admin
    </Main>
  );
};

const Main = styled.div`
  .add_account_btn {
    background-color: blue;
    color: #fff;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
  }
`;

export default Admin;
