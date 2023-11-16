import { Container, Stack, TextField, Typography, styled } from "@mui/material";
import { AppButton, Header } from "../../components";
import { login } from "../../services/account";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useUser } from "../../providers/user-provider";

let loginSchema = object({
  username: string().required(),
  password: string().required(),
  // quantity: number().required().max(5).positive(),
});

const Login = () => {
  const navigate = useNavigate();
  const { setUser, text } = useUser();

  const onSubmitLogin = (values) => {
    login(values)
      .then((res) => {
        console.log(res);
        navigate("/");
        setUser({ name: "NTN" });
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
    // validate: validate,
    validationSchema: loginSchema,
    onSubmit: onSubmitLogin,
  });

  return (
    <Main>
      <Header />

      <Container maxWidth="sm">
        <form onSubmit={formik.handleSubmit} className="signup_form">
          <Stack spacing={2}>
            <Typography className="form_title">Login</Typography>

            <TextField
              placeholder="Press username"
              label="Username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={!!formik.errors.username}
              helperText={formik.errors.username}
            />

            <TextField
              placeholder="Press password"
              label="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
            />

            {formik.errors.root && (
              <Typography className="error_text">{formik.errors.root}</Typography>
            )}

            <AppButton type="submit">Login</AppButton>
          </Stack>
        </form>
      </Container>
    </Main>
  );
};

const Main = styled(Stack)(({ theme }) => ({
  "& .error": {
    color: "red",
  },
  ".signup_form": {
    width: "100%",
  },
  ".MuiContainer-root": {
    height: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
  },

  [theme.breakpoints.down("sm")]: {},
}));

export default Login;
