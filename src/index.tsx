import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const customTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        contained: {
          borderRadius: "10px",
        },
      },
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.Fragment>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.Fragment>
)
