import React from "react";
//url
import { locationsUrl } from "../api";
//styling
import styled from "styled-components";
//components
import WholePageComponent from "../components/WholePageComponent";

const LocationsPage = ({ darkModeState }) => {
  const locations = true;
  return (
    <LocationsPageComponent
      style={{ backgroundBlendMode: darkModeState ? "luminosity" : "normal" }}
    >
      <WholePageComponent
        url={locationsUrl}
        item={"locations"}
        locations={locations}
      />
    </LocationsPageComponent>
  );
};

const LocationsPageComponent = styled.div`
  background-color: black;
  background-image: url("https://static.wikia.nocookie.net/rickandmorty/images/e/e1/S1e10_hideout_planet.png/revision/latest?cb=20160911012541");
`;

export default LocationsPage;
