import { PaletteMode } from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#111",
          },
          divider: grey[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#f4f4f4"
          },
          divider: grey[600],
          background: {
            default: "#000",
            paper: "#000",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
  typography: {
    fontFamily: "Inter",
  },
  shape: {
    borderRadius: 10,
  },
});
