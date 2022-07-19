import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Box, Card, Stack, Button, Typography } from "@mui/material";
import { ReactComponent as IncordIcon } from "../../../assets/svg/incord.svg";
import useStyles from "./style"

const AuthLayout = ({
  headerTitle,
  actionText,
  forgotPassword,
  footerComponent,
  onAction,
  children,
  loading
}) => {
  const classes= useStyles()
  return (
    <Box className={classes.wholeBox}>
      <Stack sx={{ maxWidth: "xs", width: "340px" }}>
        <Box className={classes.icon}>
          <IncordIcon />
        </Box>
        <Card className={classes.card}>
          <Box className={classes.headerTitle}>
            {headerTitle}
          </Box>
          <Box 
          className={classes.form}
            component="form"
            onSubmit={onAction}
          >
            {children}
            {forgotPassword && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                  my: 1,
                }}
              >
                <Link className={classes.link} to="/forgot-password">
                  forgot password
                </Link>
              </Box>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
            >
              {actionText}
            </Button>
            {footerComponent && (
              <Box className={classes.footer}>
                <Typography variant="body2">
                  {footerComponent}
                </Typography>
              </Box>

            )}
          </Box>
        </Card>
      </Stack>
    </Box>
  );
}

AuthLayout.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  forgotPassword: PropTypes.bool,
  footerComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onAction: PropTypes.func,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool
}
AuthLayout.defaultProps = {
  forgotPassword: false,
  footerComponent: '',
  onAction: () => { },
  loading: false
}

export default AuthLayout
