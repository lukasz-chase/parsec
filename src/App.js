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
import PeoplePage from "./pages/PeoplePage";
import LocationsPage from "./pages/LocationsPage";
import EpisodesPage from "./pages/EpisodesPage";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#97ce4c",
      },
      secondary: {
        main: "#B7E4F9FF",
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
        <Route path="/characters" exact>
          <PeoplePage />
        </Route>
        <Route path="/locations" exact>
          <LocationsPage />
        </Route>
        <Route path="/episodes" exact>
          <EpisodesPage />
        </Route>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
