import React from "react";
import "../styles/globals.css";
import { client } from "../config/ApolloProvider";
import { ApolloProvider } from "@apollo/client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }: any) {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "Inter",
    },
    shape: {
      borderRadius: 10,
    },
  });

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
