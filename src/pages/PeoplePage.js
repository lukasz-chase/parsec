import React from "react";
//url
import { charactersUrl } from "../api";
//styling
import styled from "styled-components";
//components
import WholePageComponent from "../components/WholePageComponent";

const PeoplePage = () => {
  return (
    <PeoplePageComponent>
      <WholePageComponent url={charactersUrl} item={"characters"} />
    </PeoplePageComponent>
  );
};

const PeoplePageComponent = styled.div``;

export default PeoplePage;
