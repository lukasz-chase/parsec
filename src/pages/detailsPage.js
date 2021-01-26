import React, { useEffect, useState } from "react";
//import router
import { useLocation } from "react-router-dom";
//axios
import axios from "axios";
//url
import { specificUrl } from "../api";
//styling
import styled from "styled-components";
//components
import Character from "../components/character";

const DetailsPage = ({ darkModeState }) => {
  //state
  const [data, setData] = useState(null);
  //get the current location
  const location = useLocation();
  const pathId =
    location.pathname.split("/", 3)[1] +
    "/" +
    location.pathname.split("/", 3)[2];
  //useEffect
  useEffect(() => {
    axios.get(specificUrl(pathId)).then((res) => setData(res.data));
  }, [pathId]);
  return (
    <DetailsPageComponent
      style={{
        color: darkModeState
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(255, 255, 255, 0.9)",
      }}
    >
      {data && data.dimension && (
        <div className="detailsPage-header">
          <h1>{data.name}</h1>
        </div>
      )}
      {data && (
        <div className="detailsPage-article">
          {data.dimension && (
            <div className="location-details">
              {console.log(data)}
              <span>
                <b>Created:</b> {data.created}
              </span>
              <span>
                <b>Dimension:</b> {data.dimension}
              </span>
              <span>
                <b>Type:</b> {data.type}
              </span>
              <div className="residents">
                <b>Residents:</b>
                {data.residents
                  .map((character) => (
                    <Character
                      id={character.split("/", 6)[5]}
                      key={character.split("/", 6)[5]}
                    />
                  ))
                  .reduce((prev, curr) => [prev, ", ", curr])}
              </div>
            </div>
          )}
        </div>
      )}
    </DetailsPageComponent>
  );
};

const DetailsPageComponent = styled.div`
  min-height: 100vh;
  padding: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .detailsPage-header {
    font-size: 3rem;
    @media screen and(max-width:800px) {
      font-size: 2rem;
    }
  }
  .detailsPage-article {
    width: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .location-details {
      display: flex;
      flex-direction: column;
      span {
        font-size: 1.5rem;
        padding: 1rem 0rem;
        color: #97ce4c;
        @media screen and(max-width:800px) {
          font-size: 1rem;
        }
        b {
          text-align: left;
          color: white;
        }
      }
      .residents {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 1.5rem;
      }
    }
  }
`;

export default DetailsPage;
