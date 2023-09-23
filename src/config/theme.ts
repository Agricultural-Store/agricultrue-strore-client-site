import { Shadows, ThemeOptions, createTheme } from "@mui/material";

const defaultTheme = createTheme();

const defaultShadows: ThemeOptions["shadows"] = [...defaultTheme.shadows];

declare module "@mui/material/styles" {
  interface Palette {
    color?: {
      textPrimary300?: string;
      textWhite?: string;
      textBlack?: string;

      bgPrimary?: string;
      bgPrimary400?: string;
    };
  }
  interface PaletteOptions {
    color?: {
      textPrimary300?: string;
      textWhite?: string;
      textBlack?: string;

      bgPrimary?: string;
      bgPrimary400?: string;
    };
  }
}

export const buildTheme = (font?: string) =>
  createTheme({
    shadows: defaultShadows.map(() => "none") as Shadows,
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
      color: {
        textPrimary300: "#98B568",
        textWhite: "#FFFFFF",
        textBlack: "#141416",
        bgPrimary: "#265426",
        bgPrimary400: "#63811E",
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
