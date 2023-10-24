// import styled from "styled-components";
import Button from "./Button";
import { MdDeleteOutline } from "react-icons/md";

const Account = (props) => {
  const { account, onClickEdit, onClickDelete, setSelectedAccount } = props;

  return (
    <tr>
      <td>{account.id}</td>
      <td>{account.email}</td>
      <td>{account.username}</td>
      <td>{account.fullname}</td>
      <td>{account.department}</td>
      <td>{account.position}</td>
      <td>
        <Button
          text="Edit"
          bgColor="orange"
          onClick={() => {
            setSelectedAccount(account);
            onClickEdit();
          }}
        />
      </td>
      <td>
        <Button
          text={
            <>
              <MdDeleteOutline />
              Delete
            </>
          }
          onClick={() => {
            setSelectedAccount(account);
            onClickDelete();
          }}
          bgColor="red"
        />
      </td>
    </tr>
  );
};

export default Account;
