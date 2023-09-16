import { createTheme } from "@mui/material";

export const buildTheme = (font?: string) =>
  createTheme({
    palette: {
      primary: {
        main: "#265426",
      },
      secondary: {
        main: "#F4F5F6",
      },
      background: {
        default: " #FFFFFF",
      },
      error: {
        main: "#E25C5C",
      },
    },
    typography: {
      // fontFamily: font,

      h1: {
        fontSize: "14px",
      },
      h2: {
        fontSize: "14px",
      },
      h3: {
        fontSize: "14px",
      },
      h4: {
        fontSize: "14px",
      },
      h5: {
        fontSize: "14px",
        fontWeight: 400,
      },
      h6: {
        fontSize: "14px",
      },
    },
  });
