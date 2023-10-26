import { Shadows, ThemeOptions, createTheme, responsiveFontSizes } from "@mui/material";

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
      bgPrimary300?: string;
      bgPrimaryWithOpacity?: string;
      bgWhite?: string;
      bgNeutral200?: string;
      bgNeutral300?: string;
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
      bgPrimary300?: string;
      bgPrimaryWithOpacity?: string;
      bgWhite?: string;
      bgNeutral200?: string;
      bgNeutral300?: string;
    };
  }
}

export const buildTheme = (font?: string) =>
  responsiveFontSizes(
    createTheme({
      components: {
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              textTransform: "capitalize",
            },
          },
        },
        MuiAutocomplete: {
          defaultProps: {
            componentsProps: {
              paper: {
                sx: {
                  bgcolor: "#F4F5F6",
                },
              },
            },
          },
        },
      },
      shadows: defaultShadows.map(() => "none") as Shadows,
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
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
          default: "#FFFFFF",
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
          bgPrimary300: "#98B568",
          bgPrimary400: "#63811E",
          bgPrimaryWithOpacity: "rgba(99, 129, 30, 0.08)",
          bgWhite: "#FFFFFF",
          bgNeutral200: "#F4F5F6",
          bgNeutral300: "#E6E8EC",
        },
      },
      typography: {
        fontFamily: font,

        h1: {
          fontSize: "1.75rem",
          fontWeight: 700,
        },
        h2: {
          fontSize: "1.5rem",
          fontWeight: 700,
        },
        h3: {
          fontSize: "1.25rem",
          fontWeight: 700,
        },
        h4: {
          fontSize: "1rem",
          fontWeight: 700,
        },
        body2: {
          fontSize: "16px",
        },
      },
    }),
  );
