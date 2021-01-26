import React from "react";
//url
import { charactersUrl } from "../api";
//styling
import styled from "styled-components";
//components
import WholePageComponent from "../components/WholePageComponent";

const PeoplePage = ({ darkModeState }) => {
  const characters = true;
  return (
    <PeoplePageComponent
      style={{ backgroundColor: darkModeState ? "black" : "white" }}
    >
      <WholePageComponent
        url={charactersUrl}
        item={"characters"}
        characters={characters}
      />
    </PeoplePageComponent>
  );
};

const PeoplePageComponent = styled.div``;

export default PeoplePage;
