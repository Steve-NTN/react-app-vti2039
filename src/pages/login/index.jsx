import { Button, Stack, TextField, Typography, styled } from "@mui/material";
import { Header } from "../../components";
import { useState } from "react";
import { login } from "../../services/account";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    show: false,
    text: "",
  });

  const onChangeLoginInfo = (updateData = {}) => {
    setLoginInfo({ ...loginInfo, ...updateData });
  };

  const onSubmitLogin = (e) => {
    e?.preventDefault();
    console.log(loginInfo);
    login(loginInfo)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError({ show: true, text: err?.response?.data?.msg });
      });
  };

  return (
    <Main>
      <Header />

      <form className="login_form" onSubmit={onSubmitLogin}>
        <Stack spacing={2} p={2} maxWidth={460} mx="auto">
          <TextField
            placeholder="Nhập tài khoản"
            value={loginInfo.username}
            onChange={(e) => onChangeLoginInfo({ username: e.target.value })}
          />
          <TextField
            placeholder="Nhập mật khẩu"
            value={loginInfo.password}
            onChange={(e) => onChangeLoginInfo({ password: e.target.value })}
          />

          {error.show && (
            <Typography className="error">{error.text}</Typography>
          )}

          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Main>
  );
};

const Main = styled(Stack)({
  "& .error": {
    color: "red",
  },
});

export default Login;
