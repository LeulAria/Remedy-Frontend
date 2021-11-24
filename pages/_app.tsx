import React from "react";
import "../styles/globals.css";
import { client } from "../config/ApolloProvider";
import { ApolloProvider } from "@apollo/client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "../config/theme";
import useTheme from "../global-store/useTheme";

function MyApp({ Component, pageProps }: any) {
  const mode = useTheme((state) => state.mode);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <CssBaseline />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
