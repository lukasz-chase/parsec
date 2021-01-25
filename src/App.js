import React from "react";
//global styles
import GlobalStyles from "./components/GlobalStyles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//router
import { Route } from "react-router-dom";
//pages
import HomePage from "./pages/HomePage";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#fff06c",
        main: "#ffe81f",
        dark: "#d2bc00",
      },
      secondary: {
        light: "#6c7bff",
        main: "#1f36ff",
        dark: "#0016d2",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav />
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
