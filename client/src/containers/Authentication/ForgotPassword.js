import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { MailIcon } from "../../assets/svg";

const ForgotPassword = () => {
  return (
    <Grid className={'loginContainer'}>
      <Typography variant="h2" className="" sx={{ pb: 3 }}>
        Forgot Password?
      </Typography>
      <Typography variant="body1" color={"textSecondary"} sx={{ pb: 4 }}>
        Enter the email address and we’ll send you OTP to reset your password.
        For security reasons, the password can be changed by the AgenciFlow’s
        team.
      </Typography>
      <Grid item xs={12} sx={{ pb: 4 }}>
        <TextField
          id="outlined-basic"
          placeholder="Enter your agenciflow mail id"
          variant="outlined"
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
      <Grid item xs={12} sx={{ pb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Send OTP to reset your Password
        </Button>
      </Grid>
      <Grid align="center">
        <NavLink to="/auth/login">
          <Button variant="text">Back to Login</Button>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
