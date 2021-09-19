import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#F5F5F5",
    },
  },
  shape: {
    borderRadius: 16,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "inherit",
      },
    },
  },
});
export default theme;
