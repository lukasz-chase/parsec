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

const LocationDetails = ({ darkModeState }) => {
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
    <LocationDetailsComponent
      style={{
        color: darkModeState
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(255, 255, 255, 0.9)",
        backgroundBlendMode: darkModeState ? "luminosity" : "normal",
      }}
    >
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
  background-color: black;
  background-image: url("https://scontent.fpoz4-1.fna.fbcdn.net/v/t1.15752-9/143353938_2720157408235615_4299837984798847925_n.png?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=TEgDWRnF0P0AX8kP5pj&_nc_ht=scontent.fpoz4-1.fna&oh=7070d26b1356b16b1ae9ab51999df1ff&oe=603454E0");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  }
  .LocationDetails-article {
    width: 45vw;
    display: flex;
    align-items: center;
    flex-direction:column;
    font-size: 1.5rem;
    flex-wrap:wrap;
    .header-text{
      font-size:4rem;
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
        padding-left:6px;
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