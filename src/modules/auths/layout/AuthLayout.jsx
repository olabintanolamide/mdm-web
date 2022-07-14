import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Box, Card, Stack, Button, Typography } from "@mui/material";
import { ReactComponent as IncordIcon } from "../../../assets/svg/incord.svg";

const AuthLayout = ({
  headerTitle,
  actionText,
  forgotPassword,
  footerComponent,
  onAction,
  children,
  loading
}) => {
  return (
    <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Stack sx={{ maxWidth: "xs", width: "340px" }}>
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <IncordIcon />
        </Box>
        <Card
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 3px 16px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px 4px 0px 0px",
            width: "100%",
          }}
          elevation={0}
        >
          <Box sx={{
            textAlign: "left",
            width: "100%",
            fontSize: "14px",
            color: "#393A4A",
            my: 1,
          }}>{headerTitle} </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              width: "100%",
            }}
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
                <Link style={{ textDecoration: "none" }} to="/forgot-password">
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
              <Box sx={{
                boxSizing: "border-box",
                width: "100%",
              }}>
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
