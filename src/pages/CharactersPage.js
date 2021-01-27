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
  background-image: url("https://scontent.fpoz4-1.fna.fbcdn.net/v/t1.15752-9/143353938_2720157408235615_4299837984798847925_n.png?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=TEgDWRnF0P0AX8kP5pj&_nc_ht=scontent.fpoz4-1.fna&oh=7070d26b1356b16b1ae9ab51999df1ff&oe=603454E0");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export default CharactersPage;
