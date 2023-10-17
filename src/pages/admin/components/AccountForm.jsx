import { Input } from "../../../components";
import { POSITIONS } from "../../../constants/account";

const AccountForm = () => {
  return (
    <form>
      <Input label="Email" placeholder="Input email" />
      <Input label="Email" placeholder="Input email" />
      <Input label="Email" placeholder="Input email" />
      <Input
        label="Position"
        placeholder="Input position"
        type="select"
        options={POSITIONS}
      />
    </form>
  );
};

export default AccountForm;
