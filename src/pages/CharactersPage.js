import React, { useEffect } from "react";
//url
import { charactersUrl } from "../api";
//styling
import styled from "styled-components";
//components
import WholePageComponent from "../components/WholePageComponent";

const CharactersPage = ({ darkModeState, lastPage, setLastPage }) => {
  const characters = true;
  useEffect(() => {
    setLastPage("/characters");
  }, [setLastPage]);

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
  background-image: url("https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/04/rick-and-morty-couch-header.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export default CharactersPage;
