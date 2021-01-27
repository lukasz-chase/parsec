import React, { useEffect, useState } from "react";
//axios
import axios from "axios";
//url
import { specificCharacterUrl } from "../api";
//link
import { Link } from "react-router-dom";
//styling
import styled from "styled-components";

const Character = ({ id }) => {
  //state
  const [char, setChar] = useState(null);
  useEffect(() => {
    axios.get(specificCharacterUrl(id)).then((res) => setChar(res.data));
  }, [id]);
  return (
    <CharacterComponent>
      {char && (
        <span>
          <Link className="one-character" to={`/character/${id}`}>
            {char.name}
          </Link>
        </span>
      )}
    </CharacterComponent>
  );
};

const CharacterComponent = styled.div`
  .one-character {
    color: #97ce4c;
    text-decoration: none;
    text-shadow: 1px 1px black;
    &:hover {
      color: #b7e4f9ff;
    }
  }
`;

export default Character;
