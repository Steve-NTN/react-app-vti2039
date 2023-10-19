import { useState } from "react";
import { Button, Input } from "../../../components";
import { DEPARTMENTS, POSITIONS } from "../../../constants/account";

const AccountForm = () => {
  const [account, setAccount] = useState({
    email: "Hello",
    username: "",
    fullname: "",
    department: 0,
    position: 0,
  });
  const onSubmitForm = (e) => {
    e?.preventDefault();
    console.log("Clicked");
  };

  const onChange = (updateData = {}) => {
    setAccount({ ...account, ...updateData });
  };

  console.log(account);

  return (
    <form onSubmit={onSubmitForm}>
      <Input
        label="Email"
        placeholder="Input email"
        value={account.email}
        onChange={(e) => onChange({ email: e?.target?.value })}
      />
      <Input
        label="Username"
        placeholder="Input Username"
        value={account.username}
        onChange={onChange}
      />
      <Input
        label="Fullname"
        placeholder="Input Fullname"
        value={account.fullname}
      />
      <Input
        label="Department"
        placeholder="Input Department"
        type="select"
        options={DEPARTMENTS}
        value={account.department}
      />
      <Input
        label="Position"
        placeholder="Input position"
        type="select"
        options={POSITIONS}
        value={account.position}
      />

      <Button type="submit" />
    </form>
  );
};

export default AccountForm;
