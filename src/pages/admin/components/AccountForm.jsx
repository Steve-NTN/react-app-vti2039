import { Input } from "../../../components";
import { DEPARTMENTS, POSITIONS } from "../../../constants/account";

const AccountForm = ({ selectedAccount, setSelectedAccount }) => {

  const onChange = (updateData = {}) => {
    setSelectedAccount({ ...selectedAccount, ...updateData });
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
        value={selectedAccount.fullname}
        onChange={(e) => onChange({ fullname: e?.target?.value })}
      />
      <Input
        label="Department"
        placeholder="Input Department"
        type="select"
        options={DEPARTMENTS}
        value={selectedAccount.department}
        onChange={(e) => onChange({ department: e?.target?.value })}
      />
      <Input
        label="Position"
        placeholder="Input position"
        type="select"
        options={POSITIONS}
        value={selectedAccount.position}
        onChange={(e) => onChange({ position: e?.target?.value })}
      />
    </>
  );
};

export default AccountForm;
