import {
  IconButton,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onClickUser = () => {
    navigate("/login");
  };
  return (
    <StyledHeader
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography className="logo_text">NTN</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Stack>

      <Stack spacing={2} direction="row">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </Stack>

      <IconButton onClick={onClickUser}>
        <AccountCircleIcon />
      </IconButton>
    </StyledHeader>
  );
};

const StyledHeader = styled(Stack)({
  backgroundColor: "orange",
  "& .logo_text": {
    fontWeight: 600,
  },
});

export default Header;
