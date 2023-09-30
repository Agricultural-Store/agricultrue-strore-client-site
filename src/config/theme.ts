import { Shadows, ThemeOptions, createTheme } from "@mui/material";

const defaultTheme = createTheme();

const defaultShadows: ThemeOptions["shadows"] = [...defaultTheme.shadows];

declare module "@mui/material/styles" {
  interface Palette {
    color?: {
      textPrimary?: string;
      textPrimary300?: string;
      textWhite?: string;
      textBlack?: string;
      textNeutral400?: string;
      textNeutral500?: string;
      textNeutral600?: string;
      textNeutral900?: string;
      textGrey500?: string;

      bgPrimary?: string;
      bgPrimary400?: string;
      bgPrimaryWithOpacity?: string;
      bgWhite?: string;
    };
  }
  interface PaletteOptions {
    color?: {
      textPrimary?: string;
      textPrimary300?: string;
      textWhite?: string;
      textBlack?: string;
      textNeutral400?: string;
      textNeutral500?: string;
      textNeutral600?: string;
      textNeutral900?: string;
      textGrey500?: string;

      bgPrimary?: string;
      bgPrimary400?: string;
      bgPrimaryWithOpacity?: string;
      bgWhite?: string;
    };
  }
}

export const buildTheme = (font?: string) =>
  createTheme({
    shadows: defaultShadows.map(() => "none") as Shadows,
    breakpoints: {
      values: {
        xs: 0,
        sm: 870,
        md: 1100,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: "#265426",
      },
      secondary: {
        main: "#D9EDD7",
      },
      background: {
        default: " #FFFFFF",
      },
      error: {
        main: "#E25C5C",
      },
      color: {
        textPrimary: "#265426",
        textPrimary300: "#98B568",
        textWhite: "#FFFFFF",
        textBlack: "#141416",
        textNeutral400: "#B1B5C3",
        textNeutral500: "#777E90",
        textNeutral600: "#606779",
        textNeutral900: "#141416",
        textGrey500: "#A3AAAB",
        bgPrimary: "#265426",
        bgPrimary400: "#63811E",
        bgPrimaryWithOpacity: "rgba(99, 129, 30, 0.08)",
        bgWhite: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: font,

      h1: {
        fontSize: "14rem",
      },
      h2: {
        fontSize: "14rem",
      },
      h3: {
        fontSize: "14rem",
      },
      h4: {
        fontSize: "14rem",
      },
      h5: {
        fontSize: "14rem",
        fontWeight: 400,
      },
      h6: {
        fontSize: "14rem",
      },
      body2: {
        fontSize: "16rem",
      },
      body1: {
        fontSize: "16rem",
      },
      subtitle1: {
        fontSize: "16rem",
      },
      caption: {
        fontSize: "16rem",
      },
      allVariants: {
        fontSize: "16rem",
      },
      subtitle2: {
        fontSize: "16rem",
      },
      button: {
        fontSize: "16rem",
      },
      htmlFontSize: 16,
    },
  });
