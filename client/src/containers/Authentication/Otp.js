import React from "react";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { MailIcon } from "../../assets/svg";

const Otp = () => {

  const onReset = () => {

  };

  return (
    <Grid className={'loginContainer'}>
      <Typography variant="h2" className="" sx={{ pb: 3 }}>
        Enter Otp
      </Typography>
      <Typography variant="body1" color={"textSecondary"} sx={{ pb: 4 }}>
        Enter the otp
      </Typography>
      <Grid item xs={12} sx={{ pb: 4 }}>
        <TextField
          id="outlined-basic"
          placeholder="Enter OTP send to your AgenciFlow id"
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
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onReset}
          fullWidth
        >
          Reset Password
        </Button>
      </Grid>
    </Grid>
  );
};

export default Otp;
