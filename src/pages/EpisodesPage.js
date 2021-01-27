import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//url
import { episodesUrl } from "../api";
//axios
import axios from "axios";
//components
import Character from "../components/character";
//icon
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//input
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
//material ui
import Pagination from "@material-ui/lab/Pagination";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const EpisodesPage = ({ darkModeState }) => {
  //state
  const [episodes, setEpisodes] = useState(null);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [episode, setEpisode] = useState("");
  const [textInput, setTextInput] = useState("");
  //useEffect
  useEffect(() => {
    axios
      .get(episodesUrl(page, name, episode))
      .then((res) => setEpisodes(res.data));
  }, [page, name, episode]);
  const pagesHandler = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };
  const inputHandler = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
    setName(textInput);
  };
  const formHandler = (e) => {
    e.preventDefault();
    setName(textInput);
    setTextInput("");
  };
  function numberHandler(e) {
    setEpisode(e.target.value);
  }
  return (
    <EpisodesPageComponent
      style={{ backgroundBlendMode: darkModeState ? "luminosity" : "normal" }}
    >
      <div className="EpisodesPage-header">
        Here you can check every episode from <span> rick and mortys </span>{" "}
        series
      </div>
      <div className="EpisodesPage-sort">
        <div className="page-input">
          <form onSubmit={formHandler}>
            <TextField
              id="standard-adornment-password"
              label="Search by name"
              color="secondary"
              className="input-field"
              size="small"
              value={textInput}
              onChange={inputHandler}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon className="submit=icon" onClick={formHandler} />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </div>
        {episodes && (
          <div className="page-slider">
            <input
              type="number"
              className="number-input"
              min="1"
              max="41"
              placeholder="Ep.num."
              onChange={numberHandler}
            />
          </div>
        )}
      </div>
      <div className="EpisodesPage-article">
        {episodes && (
          <div className="episodesList">
            {episodes.results.map((episode) => (
              <Accordion
                key={episode.id}
                className="accordion"
                style={{
                  backgroundColor: darkModeState
                    ? "rgba(0, 0, 0, 0.8)"
                    : "rgba(0, 0, 0, 0.5)",
                  color: darkModeState ? "rgba(255, 255, 255, 0.568)" : "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span className="episodeNumber">{episode.episode}</span>
                  {episode.name}
                </AccordionSummary>
                <AccordionDetails className="episodes-info">
                  <div className="date">
                    Air Date: <span>{episode.air_date}</span>
                  </div>
                  <div className="characters">
                    <div className="character-header">
                      Characters that performed in this episode:
                    </div>

                    {episode.characters
                      .map((character) => (
                        <Character
                          id={character.split("/", 6)[5]}
                          key={character.split("/", 6)[5]}
                        />
                      ))
                      .reduce((prev, curr) => [prev, ", ", curr])}
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        )}
      </div>
      {episodes ? (
        <Pagination
          count={episodes.info.pages}
          color="primary"
          className="choosePage"
          onChange={pagesHandler}
        />
      ) : (
        ""
      )}
    </EpisodesPageComponent>
  );
};

const EpisodesPageComponent = styled.div`
  padding: 5rem 0;
  min-height: 100vh;
  background-color: black;
  background-image: url("https://images4.alphacoders.com/633/thumb-1920-633222.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 14rem;
  .EpisodesPage-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.5rem;
    color: white;
    text-shadow: 1px 1px black;
    span {
      color: #97ce4c;
      padding: 0 10px;
    }
  }
  .EpisodesPage-sort {
    display: flex;
    justify-content: center;
    align-items: center;
    .input-field {
      background-color: white;
    }
    .page-slider {
      padding: 0rem 1rem;
      .number-input {
        width: 6.5rem;
        height: 2.9rem;
        font-size: 1.5rem;
      }
    }
  }
  .EpisodesPage-article {
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .episodesList {
      width: 25%;
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
      .accordion {
        width: 100%;
      }
    }
  }
  .choosePage {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .episodeNumber {
    padding-right: 1rem;
    color: #97ce4c;
    text-shadow: 1px 1px black;
  }
  .episodes-info {
    display: flex;
    flex-direction: column;
    .date {
      padding: 1rem 0rem;
      span {
        color: #97ce4c;
        text-shadow: 1px 1px black;
      }
    }
    .characters {
      display: flex;
      flex-wrap: wrap;
      span {
        color: #97ce4c;
        text-shadow: 1px 1px black;
        padding-left: 1rem;
      }
    }
  }
`;

export default EpisodesPage;
