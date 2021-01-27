import React from "react";
//styling
import styled from "styled-components";
//material ui
import Button from "@material-ui/core/Button";
//router
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <HomePageComponent>
      <div className="homePage-banner">
        <span style={{ color: "#baff5b" }}>Parsec</span> is a rick and morty
        database that includes information on <span>characters</span>,{" "}
        <span>locations</span>, and <span>episodes</span> from rick and morty
        universe.
      </div>
      <div className="homePage-cards">
        <div className="card card-characters">
          <span className="card-text">Characters</span>
          <Link to="/characters" className="link">
            <Button variant="contained" color="primary" className="button">
              View
            </Button>
          </Link>
        </div>
        <div className="card card-location">
          <span className="card-text">Locations</span>
          <Link to="/locations" className="link">
            <Button variant="contained" color="primary" className="button">
              View
            </Button>
          </Link>
        </div>
        <div className="card card-episode">
          <span className="card-text">Episodes</span>
          <Link to="/episodes" className="link">
            <Button variant="contained" color="primary" className="button">
              View
            </Button>
          </Link>
        </div>
      </div>
    </HomePageComponent>
  );
};

const HomePageComponent = styled.div`
  display: flex;
  min-height: 50rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px black;
  font-size: 1.5rem;
  padding-top: 5rem;
  padding-bottom: 14rem;
  .homePage-banner {
    text-align: center;
    span {
      color: #6c97f5;
    }
  }
  .homePage-cards {
    min-height: 50rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem;
    flex-wrap: wrap;
    @media screen and (max-width: 880px) {
      min-height: 30rem;
    }
    .card {
      bottom: 0;
      min-height: 35rem;
      width: 12rem;
      margin: 1rem;
      transition: 0.3s ease-out all;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #80f5ef;
      font-weight: bold;
      text-shadow: 1px 1px black;
      border-radius: 2rem;
      &:hover {
        transform: scale(1.1);
      }
      @media screen and (max-width: 880px) {
        width: 6rem;
        min-height: 26rem;
        font-size: 1rem;
        &:hover {
          transform: none;
        }
      }
      .card-text {
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 1rem;
        padding: 1rem 0rem;
        margin-bottom: 10px;
      }
    }
    .card-characters {
      background-image: url("https://img.cinemablend.com/filter:scale/quill/e/e/6/d/0/d/ee6d0d035a11e370c2e1c11997f115097c34d542.jpg?mw=600");
      background-position: center;
    }
    .card-location {
      background-image: url("https://filmdaily.co/wp-content/uploads/2018/06/rick-and-morty-screaming-sun-1024x475.jpg");
      background-position: center;
    }
    .card-episode {
      background-image: url("https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1572526237662-KHRA3V0X1YKLVCU9E9K0/ke17ZwdGBToddI8pDm48kAJsswp0EXV6qc0SOJ8DOsUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc_E7dXkCi7l7eF32s1E_vQW45WD95yMX6bcbEP6L1pnbQgytvpF9JKWwbDEjqe30p/image-asset.jpeg");
      background-position: center;
    }
  }
`;

export default HomePage;
