import React, { useContext } from "react";
//url
import { locationsUrl } from "../api";
//styling
import styled from "styled-components";
//components
import WholePageComponent from "../components/WholePageComponent";
//context
import modeContext from "../modeContext";

const LocationsPage = () => {
  const { darkModeState } = useContext(modeContext);

  return (
    <LocationsPageComponent
      style={{ backgroundBlendMode: darkModeState ? "luminosity" : "normal" }}
    >
      <WholePageComponent
        darkModeState={darkModeState}
        url={locationsUrl}
        item={"locations"}
        locations={true}
      />
    </LocationsPageComponent>
  );
};

const LocationsPageComponent = styled.div`
  background-color: black;
  background-image: url("https://images5.alphacoders.com/633/thumb-1920-633151.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export default LocationsPage;
