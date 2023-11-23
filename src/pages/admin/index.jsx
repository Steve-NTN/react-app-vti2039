import { Header } from "../../components";
import { useState } from "react";

import { Tab, Tabs } from "@mui/material";
import AdminAccount from "../adminAccount";
import { useUser } from "../../providers/user-provider";
import { Navigate } from "react-router-dom";
import AdminProduct from "../adminProduct";

const Admin = (props) => {
  const [value, setValue] = useState(0);
  const { user } = useUser();

  const handleChange = (e, newvalue) => {
    setValue(newvalue);
  };

  if (user?.isAdmin !== 1) {
    return <Navigate to={"/login"} />;
  }

  console.log(value);

  const TabContent = () => {
    switch (value) {
      case 0:
        return <AdminAccount />;
      case 1:
        return <AdminProduct />;
      default:
        return null; 
    }
  };

  return (
    <>
      <Header />

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Account management" />
        <Tab label="Product management" />
      </Tabs>

      <TabContent />
      {/* {value === 0 && <AdminAccount />}
      {value === 1 && <AdminProduct />} */}
    </>
  );
};
export default Admin;
