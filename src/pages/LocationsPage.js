import React from "react";
//url
import { locationsUrl } from "../api";
//styling
import styled from "styled-components";
//components
import WholePageComponent from "../components/WholePageComponent";

const LocationsPage = () => {
  const locations = true;
  return (
    <LocationsPageComponent>
      <WholePageComponent
        url={locationsUrl}
        item={"locations"}
        locations={locations}
      />
    </LocationsPageComponent>
  );
};

const LocationsPageComponent = styled.div``;

export default LocationsPage;
