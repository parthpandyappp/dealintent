import { Tabs, Tab, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00b686",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Proxima Nova",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: "none",
          textDecoration: "none",
        },
        root: {
          borderBottom: "1px solid #BDC3C2",
          "& .Mui-selected": {
            color: "#00b686",
            backgroundColor: "#ffffff",
            fontWeight: 800,
          },
          "& .MuiTab-root": { marginRight: "7px" },
          "& .MuiTabs-divider": { display: "none" },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "0.2rem 0.2rem 0rem 0rem",
          border: "1px solid #BDC3C2",
          borderBottom: "none",
          fontWeight: 700,
        },
        textColorPrimary: {
          color: "#657372",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
        bar: {
          borderRadius: 5,
          backgroundImage:
            "linear-gradient(90deg, #00B686 50%, transparent 0%)",
          backgroundPosition: "0 0",
          backgroundRepeat: "repeat-x",
          animation: "$progress-animation 2s linear infinite",
        },
      },
    },
  },
});

export { theme };
