import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

const CharactersDetails = ({ darkModeState, lastPage }) => {
  console.log(lastPage);
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
        backgroundBlendMode: darkModeState ? "luminosity" : "normal",
      }}
    >
      <Link to={lastPage} className="link">
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ArrowBackIcon />}
          className="go-back-button"
        >
          Go Back
        </Button>
      </Link>
      {data && (
        <div className="characters-article">
          <div className="characters-img">
            <img src={data.image} alt={data.name} />
          </div>
          <div className="characters-info">
            <div className="detail">
              <b>Name:</b>
              <span>{data.name}</span>
            </div>
            <div className="detail">
              <b>Species:</b>
              <span>{data.species}</span>
            </div>
            <div className="detail">
              <b>Status:</b>
              <span>{data.status}</span>
            </div>
            <div className="detail">
              <b>Origin:</b>
              <span>{data.origin.name}</span>
            </div>
            <div className="detail">
              <b>Last Seen:</b>
              <span>{data.location.name}</span>
            </div>
            {data.type && (
              <div className="detail">
                <b>Type:</b>
                <span>{data.type}</span>
              </div>
            )}
          </div>
        </div>
      )}
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
