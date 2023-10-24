import styled from "styled-components";
import Accounts from "../../components/Accounts";
import { Button, Dialog } from "../../components";
import { AccountForm } from "./components";
import { useState } from "react";
// import { Fragment } from "react";

const initialAccount = {
  email: "",
  username: "",
  fullname: "",
  department: 1,
  position: 1,
  createAt: "2023-10-24",
};

const Admin = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(initialAccount);
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      email: "a@gmail.com",
      username: "a",
      fullname: "Nguyen Van A",
      department: 1,
      position: 1,
      createAt: "2023-10-24",
    },
    {
      id: 2,
      email: "b@gmail.com",
      username: "b",
      fullname: "Nguyen Van B",
      department: 1,
      position: 1,
      createAt: "2023-10-24",
    },
    {
      id: 3,
      email: "C@gmail.com",
      username: "C",
      fullname: "Nguyen Van C",
      department: 1,
      position: 1,
      createAt: "2023-10-24",
    },
    {
      id: 4,
      email: "a@gmail.com",
      username: "a",
      fullname: "Nguyen Van A",
      department: 1,
      position: 1,
      createAt: "2023-10-24",
    },
  ]);

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

  const onConfirmDelete = () => {
    // console.log();
    let newAccounts = [];
    for (var i = 0; i < accounts.length; i++) {
      let currentAccount = accounts[i];
      if (currentAccount.id !== selectedAccount?.id) {
        newAccounts.push(currentAccount);
      }
    }
    setAccounts(newAccounts);
    onCloseDeleteDialog();
  };

  const onClickCreateAccount = () => {
    setSelectedAccount(initialAccount);
    setShowEditDialog(true);
  };

  const onConfirmCreate = () => {
    setAccounts([
      ...accounts,
      { ...selectedAccount, id: Math.floor(Math.random() * 1000) },
    ]);
    onCloseDialog();
  };

  const onConfirmUpdate = () => {
    let newAccounts = [];
    for (var i = 0; i < accounts.length; i++) {
      let currentAccount = accounts[i];
      if (currentAccount.id !== selectedAccount?.id) {
        newAccounts.push(currentAccount);
      } else {
        newAccounts.push(selectedAccount);
      }
    }
    setAccounts(newAccounts);
    onCloseDialog();
  };

  return (
    <Main>
      <Button
        bgColor="blue"
        text="Create new account"
        onClick={onClickCreateAccount}
      />

      <p>Account list</p>

      {/* Danh sách tài khoản */}
      <Accounts
        {...{ onClickEdit, onClickDelete, accounts, setSelectedAccount }}
      />
      {showEditDialog && (
        <Dialog
          onClose={onCloseDialog}
          title={(selectedAccount?.id ? "Edit" : "Create") + " account"}
          showFooter
          onConfirm={selectedAccount?.id ? onConfirmUpdate : onConfirmCreate}
        >
          <AccountForm {...{ selectedAccount, setSelectedAccount }} />
        </Dialog>
      )}
      {showDeleteDialog && (
        <Dialog
          onClose={onCloseDeleteDialog}
          title="Delete account"
          onConfirm={onConfirmDelete}
        >
          <p>Delete account?</p>
        </Dialog>
      )}
    </Main>
  );
};

const Main = styled.div`
  td {
    text-align: center;
  }
`;

export default Admin;
