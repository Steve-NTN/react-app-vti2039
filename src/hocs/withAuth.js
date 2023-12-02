import { useEffect } from "react";
import { getProfile } from "../services/account";
import { useUser } from "../providers/user-provider";

const withAuth = (WrappedComponent) => (props) => {
  const { setUser } = useUser();

  useEffect(() => {
    getProfile()
      .then((res) => setUser(res.data.data))
      .catch((err) => setUser());
  }, [setUser]);

  return <WrappedComponent {...props} />;
};

export default withAuth;
