import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { EyeIcon, LockIcon, ShowEyeIcon } from "../../assets/svg";

const ResetPassword = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid className={'loginContainer'}>
      <Typography variant="h2" className="" sx={{ pb: 7 }}>
        Reset Password
      </Typography>
      <Typography variant="body1" color={"textSecondary"} sx={{ pb: 4 }}>
        Please make sure you a entered the password which may be either a pin or
        text to remember easily not more than 8 character.
      </Typography>
      <Grid item xs={12} sx={{ pb: 2 }}>
        <TextField
          id="outlined-basic"
          placeholder="New Password"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ pb: 2 }}>
        <TextField
          id="outlined-basic"
          placeholder="Confirm Password"
          variant="outlined"
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
      <Grid item xs={12} sx={{ pt: 5 }}>
        <Button variant="contained" color="primary" size="large" fullWidth>
          Reset Password
        </Button>
      </Grid>
      <Grid align="center">
        <NavLink to="/auth/login">
          <Button variant="text">
            Back to Login
          </Button>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default ResetPassword;
