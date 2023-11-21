import styled from "styled-components";
import Accounts from "../../components/Accounts";
import { Button, Dialog, Search } from "../../components";
import { AccountForm, Pagination } from "./components";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_DOMAIN } from "../../constants/schema";
import { getAllAccounts } from "../../services/account";
import WithLoading from "../../hocs/withLoading";
import { useNavigate, useSearchParams } from "react-router-dom";
// import { Fragment } from "react";

const initialAccount = {
  accountId: null,
  email: "",
  username: "",
  fullName: "",
  departmentId: 1,
  positionId: 1,
  createAt: "2023-10-24",
  isAccount: 0
};

export const AdminContext = createContext();

const AdminAccount = (props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(initialAccount);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reloadAccounts, setReloadAccounts] = useState(false);
  const [metaData, setMetadata] = useState({
    page: searchParams.get("page") || 1,
    limit: 10,
    search: searchParams.get("search") || "",
  });
  const [total, setTotal] = useState(0);

  const onClickEdit = (id) => {
    setShowEditDialog(true);
    navigate(`/admin/account/${id}`);
    // showDialog = true
  };

  const onClickDelete = () => {
    setShowDeleteDialog(true);
    // showDialog = true
  };

  const onCloseDialog = () => {
    navigate(`/admin`);
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
    axios
      .post(`${API_DOMAIN}/accounts`, selectedAccount)
      .then((res) => {
        onCloseDialog();
        onReloadAccounts();
      })
      .catch((err) => console.log(err));
  };

  // Lấy data tài khoản từ api
  useEffect(() => {
    setLoading(true);
    getAllAccounts(metaData.page, metaData.limit, metaData.search)
      .then((res) => {
        setLoading(false);
        setAccounts(res.data.data || []);
        setTotal(res.data.metadata?.total);
      })
      .catch((err) => {
        setAccounts([]);
        setLoading(false);
        console.log(err);
      });
  }, [reloadAccounts, metaData]);

  useEffect(() => {
    navigate({ search: `page=${metaData.page}&search=${metaData.search}` });
  }, [metaData]);

  const adminContexts = {
    accounts,
    onClickEdit,
    onClickDelete,
    setSelectedAccount,
  };

  const onClickNext = () => {
    const pageQuantity = Math.ceil(total / metaData.limit);
    const nextPageIdx = metaData.page + 1;

    if (nextPageIdx <= pageQuantity) {
      setMetadata({
        ...metaData,
        page: nextPageIdx,
      });
    }
  };

  const onClickPrevios = () => {
    const nextPageIdx = metaData.page - 1;

    if (nextPageIdx > 0) {
      setMetadata({
        ...metaData,
        page: nextPageIdx,
      });
    }
  };

  const onChangeSearch = (e) => {
    let newSearch = e?.target?.value;

    setMetadata({ ...metaData, search: newSearch });
  };

  return (
    <AdminContext.Provider value={adminContexts}>
      <Main>
        <Search value={metaData.search} onChange={onChangeSearch} />

        <Button
          bgColor="blue"
          text="Create new account"
          onClick={onClickCreateAccount}
        />

        <p>Account list</p>

        {/* Danh sách tài khoản */}
        <WithLoading isLoading={loading} WrappedComponent={Accounts} />

        {!loading && accounts.length < 1 && <p>Trống</p>}

        {/* Phân trang  */}
        <Pagination {...{ total, onClickNext, onClickPrevios, metaData }} />

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
  margin-top: 32px;
  td {
    text-align: center;
  }
`;

export default AdminAccount;
