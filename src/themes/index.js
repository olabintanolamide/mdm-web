import AdapterDateFns from "@mui/lab/AdapterDateFns";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useMemo } from "react";
import PropTypes from "prop-types";

const ThemeConfig = ({ children }) => {
  const themeOptions = useMemo(
    () => ({}),

    []
  );

  const theme = createTheme(themeOptions);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* <GlobalStyles /> */}

        {children}
      </ThemeProvider>
    </LocalizationProvider>
  );
};

ThemeConfig.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeConfig;
