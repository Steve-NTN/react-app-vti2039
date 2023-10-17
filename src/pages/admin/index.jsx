import styled from "styled-components";
import PeopleList from "../../components/PeopleList";
import { Button, Dialog } from "../../components";
import { AccountForm } from "./components";
import { useState } from "react";
// import { Fragment } from "react";

const Admin = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const onClickEdit = () => {
    setShowEditDialog(true);
    // showDialog = true
  };

  const onClickDelete = () => {
    setShowDeleteDialog(true);
    // showDialog = true
  };

  const onCloseDialog = () => {
    setShowEditDialog(false);
  };

  const onCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  return (
    <Main className="test">
      <Button bgColor="blue" text="Create new account" />
      Admin
      <PeopleList {...{ onClickEdit, onClickDelete }} />
      {showEditDialog && (
        <Dialog
          onClose={onCloseDialog}
          title="Edit account"
          showFooter
        >
          <AccountForm />
        </Dialog>
      )}
      {showDeleteDialog && (
        <Dialog
          onClose={onCloseDeleteDialog}
          title="Delete account"
          // footer={<h1>Footer</h1>}
        >
        </Dialog>
      )}
    </Main>
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
