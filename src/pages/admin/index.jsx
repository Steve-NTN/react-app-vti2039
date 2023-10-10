import styled from "styled-components";
import { accounts } from "./mockdata";
import PeopleList from "../../components/PeopleList";
import { Button } from "../../components";

const Admin = () => {
  console.log(accounts);

  return (
    <Main>
      <Button bgColor="blue" text="Create new account" />
      Admin
      <PeopleList />
    </Main>
  );
};

const Main = styled.div``;

export default Admin;
