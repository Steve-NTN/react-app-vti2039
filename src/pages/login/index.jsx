import { Stack, styled } from "@mui/material";
import { Header } from "../../components";
import { login } from "../../services/account";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const Login = () => {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.username?.trim()) {
      errors.username = "Required";
    } else {
      if (values.username?.length <= 3) {
        errors.username = "Min length is 3 characters";
      }
    }

    if (!values.password?.trim()) {
      errors.password = "Required password";
    }

    return errors;
  };

  const onSubmitLogin = (values) => {
    login(values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        formik.setErrors({ root: err?.response?.data?.msg });
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: onSubmitLogin,
  });

  return (
    <Main>
      <Header />

      <form className="login_form" onSubmit={formik?.handleSubmit}>
        <Stack spacing={2} p={2} maxWidth={460} mx="auto">
          <input
            name="username"
            placeholder="Nhập tài khoản"
            value={formik?.values?.username}
            onChange={formik.handleChange}
          />

          {formik.errors.username && (
            <p style={{ color: "red" }}>{formik.errors.username}</p>
          )}

          <input
            placeholder="Nhập mật khẩu"
            name="password"
            value={formik?.values?.password}
            onChange={formik.handleChange}
          />

          {formik.errors.password && (
            <p style={{ color: "red" }}>{formik.errors.password}</p>
          )}

          {formik.errors.root && (
            <p style={{ color: "red" }}>{formik.errors.root}</p>
          )}

          <button type="submit">Login</button>
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
