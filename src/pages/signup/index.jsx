import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { AppButton, Header } from "../../components";
import { useFormik } from "formik";
import { object, string } from "yup";
import { signup } from "../../services/account";
import { useNavigate } from "react-router-dom";

let signupSchema = object({
  username: string().required(),
  email: string().required().email(),
  fullName: string()
    .required()
    .matches("^[a-zA-Z0-9 _.-]*$", "Invalid fullname"),
  password: string().required(),
});

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      fullName: "",
      password: "",
      position: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
      signup(values)
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => {
          formik.setErrors({ root: err?.response?.data?.message });
        });
    },
  });

  console.log(formik.errors);

  return (
    <StyledSignup>
      <Header />

      <Container maxWidth="sm">
        <form onSubmit={formik.handleSubmit} className="signup_form">
          <Stack spacing={2}>
            <Typography className="form_title">Signup</Typography>

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
              placeholder="Press email"
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={!!formik.errors.email}
              helperText={formik.errors.email}
            />
            <TextField
              placeholder="Press fullname"
              label="Fullname"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={!!formik.errors.fullName}
              helperText={formik.errors.fullName}
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
            <TextField
              placeholder="Press position"
              label="Position"
              name="position"
              value={formik.values.position}
              onChange={formik.handleChange}
              error={!!formik.errors.position}
              helperText={formik.errors.position}
            />

            {formik.errors.root && (
              <p style={{ color: "red" }}>{formik.errors.root}</p>
            )}

            <AppButton type="submit">Signup</AppButton>
          </Stack>
        </form>
      </Container>
    </StyledSignup>
  );
};

const StyledSignup = styled(Box)({
  ".signup_form": {
    width: "100%",
  },
  ".MuiContainer-root": {
    height: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
  },
});

export default Signup;
