import React, { useEffect, useState } from "react";
//import router
import { useLocation } from "react-router-dom";
//axios
import axios from "axios";
//url
import { specificUrl } from "../api";
//styling
import styled from "styled-components";

const CharactersDetails = ({ darkModeState }) => {
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
  min-height: 100vh;
  padding: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-image: url("https://scontent.fpoz4-1.fna.fbcdn.net/v/t1.15752-9/143353938_2720157408235615_4299837984798847925_n.png?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=TEgDWRnF0P0AX8kP5pj&_nc_ht=scontent.fpoz4-1.fna&oh=7070d26b1356b16b1ae9ab51999df1ff&oe=603454E0");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  @media screen and (max-width: 880px) {
    background-position: 80% 0%;
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
      }
      .detail {
        padding: 1rem 0;
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
