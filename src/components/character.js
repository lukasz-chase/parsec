import React, { useEffect, useState } from "react";
//axios
import axios from "axios";
//url
import { specificCharacterUrl } from "../api";

const Character = ({ id }) => {
  //state
  const [char, setChar] = useState(null);
  useEffect(() => {
    axios.get(specificCharacterUrl(id)).then((res) => setChar(res.data));
  }, [id]);
  return <div className="div">{char && <span>{char.name}</span>}</div>;
};

export default Character;
