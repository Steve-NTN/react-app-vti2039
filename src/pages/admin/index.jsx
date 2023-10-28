import styled from "styled-components";
import Accounts from "../../components/Accounts";
import { Button, Dialog } from "../../components";
import { AccountForm } from "./components";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_DOMAIN } from "../../constants/schema";
// import { Fragment } from "react";

const initialAccount = {
  email: "",
  username: "",
  fullName: "",
  departmentId: 1,
  positionId: 1,
  createAt: "2023-10-24",
};

export const AdminContext = createContext();

const Admin = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(initialAccount);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reloadAccounts, setReloadAccounts] = useState(false);

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

  const onReloadAccounts = () => {
    setReloadAccounts(!reloadAccounts);
  };

  const onConfirmDelete = () => {
    // console.log();
    axios
      .delete(`${API_DOMAIN}/accounts/${selectedAccount?.accountId}`)
      .then((res) => {
        // window.location.reload();
        onReloadAccounts();
        onCloseDeleteDialog();
      })
      .catch((err) => console.log(err));
  };

  const onClickCreateAccount = () => {
    setSelectedAccount(initialAccount);
    setShowEditDialog(true);
  };

  const onConfirmCreate = () => {
    axios
      .post(`${API_DOMAIN}/accounts`, selectedAccount)
      .then((res) => {
        onCloseDialog();
        onReloadAccounts();
      })
      .catch((err) => console.log(err));
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

  // Lấy data tài khoản từ api
  useEffect(() => {
    setLoading(true);
    axios(`${API_DOMAIN}/accounts?page=1&limit=10`)
      .then((res) => {
        setLoading(false);
        setAccounts(res.data.data || []);
      })
      .catch((err) => {
        setAccounts([]);
        setLoading(false);
        console.log(err);
      });
  }, [reloadAccounts]);

  const adminContexts = {
    accounts,
    onClickEdit,
    onClickDelete,
    setSelectedAccount,
  };

  return (
    <AdminContext.Provider value={adminContexts}>
      <Main>
        <Button
          bgColor="blue"
          text="Create new account"
          onClick={onClickCreateAccount}
        />

        <p>Account list</p>

        {/* Danh sách tài khoản */}
        <Accounts />

        {!loading && accounts.length < 1 && <p>Trống</p>}

        {/* Loading */}
        {loading && <p>Loading...</p>}

        {showEditDialog && (
          <Dialog
            onClose={onCloseDialog}
            title={
              (selectedAccount?.accountId ? "Edit" : "Create") + " account"
            }
            showFooter
            onConfirm={
              selectedAccount?.accountId ? onConfirmUpdate : onConfirmCreate
            }
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
    </AdminContext.Provider>
  );
};

const Main = styled.div`
  td {
    text-align: center;
  }
`;

export default Admin;
