import React, { useContext } from "react";
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
import CharactersPage from "./pages/CharactersPage";
import LocationsPage from "./pages/LocationsPage";
import EpisodesPage from "./pages/EpisodesPage";
import LocationDetails from "./pages/LocationDetails";
import CharactersDetails from "./pages/CharactersDetails";
//context
import modeContext from "./modeContext";

function App() {
  const { darkModeState } = useContext(modeContext);
  //theme
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
    <div
      className="App"
      style={{ backgroundBlendMode: darkModeState ? "luminosity" : "normal" }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav />
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/characters" exact>
          <CharactersPage />
        </Route>
        <Route path="/locations" exact>
          <LocationsPage />
        </Route>
        <Route path="/episodes" exact>
          <EpisodesPage />
        </Route>
        <Route path="/location/:id" exact>
          <LocationDetails />
        </Route>
        <Route path="/character/:id" exact>
          <CharactersDetails />
        </Route>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
