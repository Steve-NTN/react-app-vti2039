import { Stack, TextField, styled } from "@mui/material";
import { Header } from "../../components";
import { login } from "../../services/account";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { number, object, string } from "yup";
import { useUser } from "../../providers/user-provider";
import useCounter from "../../hooks/useCounter";

let loginSchema = object({
  username: string().required().min(5),
  password: string().required(),
  // quantity: number().required().max(5).positive(),
});

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }
//   return errors;
// };

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const {counter, onDecrease, onIncrease} = useCounter();

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

          <TextField
            placeholder="Enter quantity"
            name="quantity"
            value={formik?.values?.quantity}
            onChange={formik.handleChange}
            error={!!formik.errors.quantity}
            helperText={formik.errors.quantity}
          />

          {formik.errors.root && (
            <p style={{ color: "red" }}>{formik.errors.root}</p>
          )}

          <button onClick={onDecrease}>-</button>
          <p>{counter}</p>
          <button onClick={onIncrease}>+</button>

          <button type="submit">Login</button>
        </Stack>
      </form>
    </Main>
  );
};

const Main = styled(Stack)(({ theme }) => ({
  "& .error": {
    color: "red",
  },

  [theme.breakpoints.down("sm")]: {},
}));

export default Login;
