import React, { useContext } from "react";
//import router
import { useLocation } from "react-router-dom";
//axios
import axios from "axios";
//url
import { specificUrl } from "../api";
//styling
import styled from "styled-components";
//icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
//link
import { useHistory } from "react-router-dom";
//context
import modeContext from "../modeContext";
import { useQuery } from "@tanstack/react-query";

const CharactersDetails = () => {
  const { darkModeState } = useContext(modeContext);
  //get the current location
  const history = useHistory();
  const location = useLocation();
  const pathId =
    location.pathname.split("/", 3)[1] +
    "/" +
    location.pathname.split("/", 3)[2];

  const query = useQuery({
    queryKey: ["characters", pathId],
    queryFn: () => axios.get(specificUrl(pathId)).then((res) => res.data),
  });
  if (query.status === "loading") return <h1>Loading...</h1>;
  if (query.status === "error") {
    return <h1>{JSON.stringify(query.error)}</h1>;
  }
  const {
    image,
    name,
    species,
    status,
    origin,
    location: localization,
    type,
  } = query.data;
  return (
    <DetailsPageComponent
      style={{
        color: darkModeState
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(255, 255, 255, 0.9)",
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
      <div className="characters-article">
        <div className="characters-img">
          <img src={image} alt={name} />
        </div>
        <div className="characters-info">
          <div className="detail">
            <b>Name:</b>
            <span>{name}</span>
          </div>
          <div className="detail">
            <b>Species:</b>
            <span>{species}</span>
          </div>
          <div className="detail">
            <b>Status:</b>
            <span>{status}</span>
          </div>
          <div className="detail">
            <b>Origin:</b>
            <span>{origin.name}</span>
          </div>
          <div className="detail">
            <b>Last Seen:</b>
            <span>{localization.name}</span>
          </div>
          {type && (
            <div className="detail">
              <b>Type:</b>
              <span>{type}</span>
            </div>
          )}
        </div>
      </div>
    </DetailsPageComponent>
  );
};

const DetailsPageComponent = styled.div`
  height: 110vh;
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
  .characters-article {
    display: flex;
    .characters-img {
      img {
        height: 25vw;
        border-radius: 15rem;
        @media screen and (max-width: 880px) {
          height: 13rem;
          width: 13rem;
        }
      }
    }
    .characters-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 1.5rem;
      padding: 0rem 1rem;
      @media screen and (max-width: 880px) {
        font-size: 0.8rem;
        padding: 0 0.5rem;
      }
      .detail {
        padding: 1rem 0;
        color: black;
        @media screen and (max-width: 880px) {
          padding: 0.2rem 0;
        }
        span {
          padding: 0 1rem;
          color: #97ce4c;
          text-shadow: 1px 1px black;
        }
      }
    }
  }
`;

export default CharactersDetails;
