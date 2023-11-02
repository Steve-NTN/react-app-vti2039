import { Header } from "../../components";
import { useState } from "react";

import { Tab, Tabs } from "@mui/material";
import AdminAccount from "../adminAccount";


const Admin = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newvalue) => {
    setValue(newvalue);
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

      {value === 0 && <AdminAccount />}
    </>
  );
};
export default Admin;
