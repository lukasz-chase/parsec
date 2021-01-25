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
        <span style={{ color: "#d2bc00" }}>Parsec</span> is a star wars database
        that includes information on <span>people</span>,<span>films</span>,
        <span>star ships</span>,<span>vehicles</span>,<span>species</span> and{" "}
        <span>planets</span> from star wars universe.
      </div>
      <div className="homePage-cards">
        <div className="card card-people">
          <span>People</span>
          <Link to="/people" className="link">
            <Button variant="outlined" color="primary" className="button">
              View
            </Button>
          </Link>
        </div>
        <div className="card card-films">
          <span>Films</span>
          <Link to="/films" className="link">
            <Button variant="outlined" color="primary" className="button">
              View
            </Button>
          </Link>
        </div>
        <div className="card card-starShips">
          <span>Star ships</span>
          <Link to="/starships" className="link">
            <Button variant="outlined" color="primary" className="button">
              View
            </Button>
          </Link>
        </div>
        <div className="card card-vehicles">
          <span>Vehicles</span>
          <Link to="/vehicles" className="link">
            <Button variant="outlined" color="primary" className="button">
              View
            </Button>
          </Link>
        </div>
        <div className="card card-species">
          <span>Species</span>
          <Link to="/species" className="link">
            <Button variant="outlined" color="primary" className="button">
              View
            </Button>
          </Link>
        </div>
        <div className="card card-planets">
          <span>Planets</span>
          <Link to="/planets" className="link">
            <Button variant="outlined" color="primary" className="button">
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
  color: #6d6d6d;
  font-size: 1.5rem;
  padding-top: 5rem;
  padding-bottom: 7.5rem;
  .homePage-banner {
    text-align: center;
    span {
      color: white;
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
    .card {
      bottom: 0;
      min-height: 35rem;
      width: 10rem;
      margin: 1rem;
      transition: 0.3s ease-out all;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: white;
      text-shadow: 1px 1px black;
      &:hover {
        transform: scale(1.1);
      }
      .button {
        &:hover {
          background-color: #ffe81f;
          color: black;
        }
      }
      @media screen and (max-height: 500px) {
        min-height: 20rem;
        &:hover {
          transform: none;
        }
      }
    }
    .card-people {
      background-image: url("https://i.insider.com/5e70f3f4235c186e524d5b82?width=1100&format=jpeg&auto=webp");
      background-position: center;
    }
    .card-films {
      background-image: url("https://lumiere-a.akamaihd.net/v1/images/solo-a-star-wars-story-theatrical-poster-2_f4af9297.jpeg?region=0%2C397%2C1298%2C646&width=960");
      background-position: center;
    }
    .card-starShips {
      background-image: url("https://i.pinimg.com/originals/49/0e/be/490ebe0a3387960a8e6a1a98e68f33be.jpg");
      background-position: center;
    }
    .card-vehicles {
      background-image: url("https://media.comicbook.com/2019/12/image-1201172.jpeg?auto=webp&width=1280&height=627&crop=1280:627,smart");
      background-position: center;
    }
    .card-species {
      background-image: url("https://i.imgur.com/CrhKtJj.jpg");
      background-position: center;
    }
    .card-planets {
      background-image: url("https://i.pinimg.com/originals/c9/9c/8e/c99c8ea0137a18b7b787966eb1ac4f96.jpg");
      background-position: center;
    }
  }
`;

export default HomePage;
