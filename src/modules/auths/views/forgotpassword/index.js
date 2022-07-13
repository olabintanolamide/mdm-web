import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout
      headerTitle="Forgot your password?"
      actionText="Send Link"
      footerComponent={
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            my: 1,
          }}
        >
          <Link
            style={{ textDecoration: "none", display: "block" }}
            to="/signin"
          >
            return to Signin
          </Link>
        </Box>
      }
    >
      <Typography fontSize={12} lineHeight={1.5} sx={{ my: 1 }}>
        We will send a link to your inbox so that you can reset your password
        and access your account.
      </Typography>
      <Box sx={{ my: 1, width: "100%" }}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          fullWidth
        />
      </Box>
    </AuthLayout>
  );
};

export default ForgotPassword;
