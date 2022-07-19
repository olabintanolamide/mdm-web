/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Box, TextField,  Typography } from "@mui/material";

import AuthLayout from "../../layout/AuthLayout";
import { useLogin } from "../../../../hooks/queries/useAuth";
import { loginDefaultValues, loginResover } from "../../../validators";
import useStyles from "./styles";

const SignIn = () => {
  const { loginMutate, isSigningIn } = useLogin()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: loginDefaultValues,
    resolver: loginResover
  })
  const onSubmit = (data) => {
    let payload = {}
    Object.keys(loginDefaultValues).forEach(field => {
      payload[field] = data[field]
    })

    loginMutate({
      payload
    })
  }
  const classes = useStyles ()


  return (
    <AuthLayout
      headerTitle="Sign in with your email"
      actionText="Sign In"
      forgotPassword
      footerComponent={
        <Box  className={classes.box}>
          <Typography variant="body2">
            By signing in, you are agreeing to our <span className={classes.span}>  Terms & Conditions and
            Privacy Policy</span>
          </Typography>
        </Box>
      }
      loading={isSigningIn}
      onAction={handleSubmit(onSubmit)}
    >
      <Box  className={classes.box}>
        <TextField
          id="outlined-basic"
          fullWidth
          label="Email"
          variant="outlined"
          name="email"
          error={errors.email}
          // onChange={(e) => setEmail(e.target.value)}
          {...register('email')}
          helperText={errors?.email?.message || ''}

        />
      </Box>
      <Box className={classes.box}>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type='password'
          fullWidth
          name="password"
          error={errors.password}
          helperText={errors?.password?.message || ''}
          // onChange={(e) => setPassword(e.target.value)}
          {...register('password')}
        />
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
