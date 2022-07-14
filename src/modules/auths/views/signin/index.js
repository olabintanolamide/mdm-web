/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, Stack, TextField, Button, Typography } from "@mui/material";
import { ReactComponent as IncordIcon } from "../../../../assets/svg/incord.svg";
import AuthLayout from "../../layout/AuthLayout";
import { useLogin } from "../../../../hooks/queries/useAuth";

const SignIn = () => {
  const { loginMutate, isSigningIn } = useLogin()
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    const payload = {
      email,
      password
    }

    loginMutate({
      payload
    })
  }


  return (
    <AuthLayout
      headerTitle="Sign in777 with your email"
      actionText="Sign In"
      forgotPassword
      footerComponent={
        <Box sx={{ boxSizing: "border-box" }}>
          <Typography variant="body2">
            By signing in, you are agreeing to our Terms & Conditions and
            Privacy Policy
          </Typography>
        </Box>
      }
      onAction={onSubmit}
    >
      <Box sx={{ my: 1, boxSizing: "border-box", width: "100%" }}>
        <TextField
          id="outlined-basic"
          fullWidth
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box sx={{ my: 1, boxSizing: "border-box", width: "100%" }}>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
    </AuthLayout>
    // <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
    //   <Stack sx={{ maxWidth: "xs", width: "340px" }}>
    //     <Box sx={{ display: "grid", placeItems: "center" }}>
    //       <IncordIcon />
    //     </Box>
    //     <Card
    //       sx={{
    //         p: 2,
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         boxShadow: "0px 3px 16px rgba(0, 0, 0, 0.1)",
    //         borderRadius: "4px 4px 0px 0px",
    //         width: "100%",
    //       }}
    //       elevation={0}
    //     >
    //       <Box>for the signin </Box>
    //       <Box
    //         component="form"
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           boxSizing: "border-box",
    //           width: "100%",
    //         }}
    //       >
    //         <Box sx={{ my: 1, boxSizing: "border-box", width: "100%" }}>
    //           <TextField
    //             id="outlined-basic"
    //             fullWidth
    //             label="Email"
    //             variant="outlined"
    //           />
    //         </Box>
    //         <Box sx={{ my: 1, boxSizing: "border-box", width: "100%" }}>
    //           <TextField
    //             id="outlined-basic"
    //             label="Password"
    //             variant="outlined"
    //             fullWidth
    //           />
    //         </Box>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             justifyContent: "flex-start",
    //             width: "100%",
    //             my: 1,
    //           }}
    //         >
    //           <Link style={{ textDecoration: "none" }} to="/forgot-password">
    //             forgot password
    //           </Link>
    //         </Box>
    //         <Button fullWidth variant="contained">
    //           Contained
    //         </Button>
    //         <Box sx={{ boxSizing: "border-box" }}>
    //           <Typography variant="body2">
    //             By signing in, you are agreeing to our Terms & Conditions and
    //             Privacy Policy
    //           </Typography>
    //         </Box>
    //       </Box>
    //     </Card>
    //   </Stack>
    // </Box>
  );
};

export default SignIn;
