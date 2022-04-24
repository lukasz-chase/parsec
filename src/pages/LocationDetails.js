import React, { useEffect, useState, useContext } from "react";
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
//icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
//link
import { useHistory } from "react-router-dom";
//context
import modeContext from "../modeContext";

const LocationDetails = () => {
  const { darkModeState } = useContext(modeContext);
  //state
  const [data, setData] = useState(null);
  const history = useHistory();
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
    <LocationDetailsComponent
      style={{
        color: darkModeState ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.9)",
        backgroundBlendMode: darkModeState ? "luminosity" : "normal",
      }}
    >
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ArrowBackIcon />}
        className="go-back-button"
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>

      {data && (
        <div className="LocationDetails-article">
          <h1 className="header-text">{data.name}</h1>
          <div className="location-details">
            <div className="detail">
              <b>Created:</b>
              <span>{data.created}</span>
            </div>
            <div className="detail">
              <b>Dimension:</b>
              <span>{data.dimension}</span>
            </div>
            <div className="detail">
              <b>Type:</b>
              <span>{data.type}</span>
            </div>
            <div className="residents">
              <b>Residents:</b>
              {data.residents
                .map((character) => (
                  <span key={character.split("/", 6)[5]}>
                    <Character id={character.split("/", 6)[5]} />
                  </span>
                ))
                .reduce((prev, curr) => [prev, ", ", curr])}
            </div>
          </div>
        </div>
      )}
    </LocationDetailsComponent>
  );
};

const LocationDetailsComponent = styled.div`
  min-height: 100vh;
  padding: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  .go-back-button {
    font-size: 1rem;
    margin: 1rem 0rem;
    background-color: rgba(0, 0, 0, 0.6);
    @media screen and (max-width: 880px) {
      font-size: 0.5rem;
    }
  }
  .LocationDetails-article {
    width: 45vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
    flex-wrap: wrap;
    .header-text {
      font-size: 4rem;
      @media screen and (max-width: 880px) {
        font-size: 2rem;
      }
    }
    .location-details {
      display: flex;
      flex-direction: column;
      .detail {
        padding: 1rem 0rem;
        @media screen and (max-width: 880px) {
          font-size: 1rem;
          padding: 0.5rem 0;
        }
      }
      span {
        color: #97ce4c;
        text-shadow: 1px 1px black;
        padding-left: 6px;
      }
      .residents {
        display: flex;
        flex-wrap: wrap;
        @media screen and (max-width: 880px) {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default LocationDetails;
