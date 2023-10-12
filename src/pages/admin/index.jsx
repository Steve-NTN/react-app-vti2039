import styled from "styled-components";
import PeopleList from "../../components/PeopleList";
import { Button } from "../../components";
// import { Fragment } from "react";

const Admin = (props) => {
  // const { name } = props;

  return (
    <>
      <Main className="test">
        <Button bgColor="blue" text="Create new account" />
        Admin
        <PeopleList />
      </Main>
    </>
  );
};

// class Admin extends Component {
  
//   render() {
//     console.log(this.props)
//     return (
//       <>
//         <Main className="test">
//           <Button bgColor="blue" text="Create new account" />
//           Admin
//           <PeopleList />
//         </Main>
//       </>
//     );
//   }
// }

const Main = styled.div``;

export default Admin;
