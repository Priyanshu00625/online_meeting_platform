import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { AuthContext } from "../../context/AuthContext.jsx";
import Snackbar from "@mui/material/Snackbar";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

export default function SignInCard() {
  const [username, setusername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState();

  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    try {
      if (formState === 0) {
        let result = await handleLogin(username, password);
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        console.log(result);
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword("");
      }
    } catch (err) {
      let message = err.response.data.message;
      setError(message);
    }
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}>
        Sign in
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
        }}>
        <div>
          <Button
            variant={formState === 0 ? "contained" : ""}
            onClick={() => setFormState(0)}>
            SignIn
          </Button>
          <Button
            variant={formState === 1 ? "contained" : ""}
            onClick={() => setFormState(1)}>
            SignUp
          </Button>
        </div>
        <FormControl>
          <FormLabel htmlFor="username">username</FormLabel>
          <TextField
            id="username"
            type="text"
            name="username"
            placeholder="username"
            required
            fullWidth
            autoFocus
            variant="outlined"
    
            onChange={(e) => setusername(e.target.value)}
          />
        </FormControl>
        {formState === 1 ? (
          <FormControl>
            <FormLabel htmlFor="FullName">Full Name</FormLabel>
            <TextField
              id="FullName"
              type="text"
              name="FullName"
              placeholder="enter your Full Name"
              required
              fullWidth
              autoFocus
              variant="outlined"
             
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
        ) : (
          <></>
        )}

        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password">Password</FormLabel>
          </Box>
          <TextField
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoFocus
            required
            fullWidth
            variant="outlined"
           
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <p style={{ color: "red" }}>{error}</p>
        <Button
          type="button"
          fullWidth
          variant="contained"
          onClick={handleAuth}>
          {formState === 0 ? "Login" : "register"}
        </Button>
      </Box>

      <Snackbar open={open} autoHideDuration={4000} message={message} />
    </Card>
  );
}
