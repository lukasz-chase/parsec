import React from "react";
//url
import { charactersUrl } from "../api";
//styling
import styled from "styled-components";
//components
import WholePageComponent from "../components/WholePageComponent";

const CharactersPage = ({ darkModeState }) => {
  const characters = true;
  return (
    <CharactersPageComponent
      style={{ backgroundBlendMode: darkModeState ? "luminosity" : "normal" }}
    >
      <WholePageComponent
        darkModeState={darkModeState}
        url={charactersUrl}
        item={"characters"}
        characters={characters}
      />
    </CharactersPageComponent>
  );
};

const CharactersPageComponent = styled.div`
  background-color: black;
  background-image: url("https://images2.alphacoders.com/960/thumb-1920-960714.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export default CharactersPage;
