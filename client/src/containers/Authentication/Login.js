import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Style from "./Style";
import { EyeIcon, LockIcon, MailIcon, ShowEyeIcon } from "../../assets/svg";
import { login as authLogin } from "../../store/actions/authAction";

const Login = (props) => {
  const { className } = props;
  const { user, login } = useAuth();
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { user: authUser } = useSelector((s) => s.auth);

  useEffect(() => {
    if (authUser?.email) {
      login({ ...authUser });
    }
  }, [authUser, login]);

  const onLogin = () => {
    login({ id: 1, name: loginForm?.email || "Anonymous" });
    // dispatch(
    //   authLogin({
    //     ...loginForm,
    //   })
    // );
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  return !user ? (
    <Grid className={`${className} loginContainer`}>
      <Typography variant="h2" className="" sx={{ pb: 7 }}>
        Login to your account
      </Typography>
      <Grid item xs={12} sx={{ pb: 2 }}>
        <TextField
          id="auth:login-email"
          placeholder="Email"
          variant="outlined"
          name="email"
          value={loginForm?.email}
          onChange={onChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ pb: 2 }}>
        <TextField
          id="auth:login-password"
          placeholder="Password"
          variant="outlined"
          name="password"
          value={loginForm?.password}
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <ShowEyeIcon /> : <EyeIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ pb: 2 }}>
        <Link to={"/auth/forgot-password"}>
          <Typography variant="h5" color={"textSecondary"} align="right">
            Forgot your password?
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sx={{ pt: 5 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onLogin}
          fullWidth
        >
          Login
        </Button>
      </Grid>
    </Grid>
  ) : (
    <Navigate to="/" />
  );
};

export default styled(Login)(Style);
