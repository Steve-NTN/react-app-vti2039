import { useEffect, useState } from "react";
import { Input } from "../../../components";
import { DEPARTMENTS, POSITIONS } from "../../../constants/account";
import axios from "axios";
import { API_DOMAIN } from "../../../constants/schema";

const AccountForm = ({ selectedAccount, setSelectedAccount }) => {
  const [departments, setDepartments] = useState([]);
  const onChange = (updateData = {}) => {
    setSelectedAccount({ ...selectedAccount, ...updateData });
  };

  useEffect(() => {
    axios(`${API_DOMAIN}/departments`)
      .then((res) => setDepartments(res.data?.data || []))
      .catch((err) => console.log(err));
  }, []);

  const formatDepartments = () => {
    return departments.map((department) => ({
      value: department.departmentId,
      label: department.departmentName,
    }));
  };

  return (
    <>
      <Input
        label="Email"
        placeholder="Input email"
        value={selectedAccount.email}
        onChange={(e) => onChange({ email: e?.target?.value })}
      />
      <Input
        label="Username"
        placeholder="Input Username"
        value={selectedAccount.username}
        onChange={(e) => onChange({ username: e?.target?.value })}
      />
      <Input
        label="Fullname"
        placeholder="Input Fullname"
        value={selectedAccount.fullName}
        onChange={(e) => onChange({ fullName: e?.target?.value })}
      />
      <Input
        label="Department"
        placeholder="Input Department"
        type="select"
        options={formatDepartments()}
        value={selectedAccount.departmentId}
        onChange={(e) => onChange({ departmentId: e?.target?.value })}
      />
      <Input
        label="Position"
        placeholder="Input position"
        type="select"
        options={POSITIONS}
        value={selectedAccount.positionId}
        onChange={(e) => onChange({ positionId: e?.target?.value })}
      />

      {!selectedAccount?.accountId && (
        <Input
          label="Password"
          placeholder="Input password"
          value={selectedAccount.password}
          onChange={(e) => onChange({ password: e?.target?.value })}
        />
      )}
    </>
  );
};

export default AccountForm;
