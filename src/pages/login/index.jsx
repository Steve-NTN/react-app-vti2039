import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfos, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const onChangeInfo = (updateData) => {
    setLoginInfo({ ...loginInfos, ...updateData });
  };

  const onSubmitLogin = () => {
    console.log(loginInfos);

    navigate("/");
  };

  return (
    <Stack spacing={2}>
      <TextField
        placeholder="Username"
        value={loginInfos.username}
        onChange={(e) => onChangeInfo({ username: e.target.value })}
      />
      <TextField
        placeholder="Password"
        value={loginInfos.password}
        onChange={(e) => onChangeInfo({ password: e.target.value })}
      />
      <Button onClick={onSubmitLogin}>Login</Button>
    </Stack>
  );
};

export default Login;
