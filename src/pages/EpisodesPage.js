import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//url
import { episodesUrl, specificCharacterUrl } from "../api";
//axios
import axios from "axios";
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
  }, [episodesUrl, page, name]);
  //handlers
  const pagesHandler = (event, value) => {
    setPage(value);
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
  const charactersHandler = (id) => {
    // let character = axios.get(specificCharacterUrl(id)).then((res) => res.data);
    // console.log(character);
  };
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
      </div>
      <div className="EpisodesPage-article">
        {episodes && (
          <div className="episodesList">
            {console.log(episodes)}
            {episodes.results.map((episode) => (
              <Accordion
                key={episode.id}
                style={{
                  backgroundColor: darkModeState ? "gray" : "white",
                  color: "#97ce4c",
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
                <AccordionDetails>
                  {" "}
                  Air Date: {episode.air_date}
                  {episode.characters.map((character) =>
                    charactersHandler(character.split("/", 6)[5])
                  )}
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
  background-image: url("https://i.pinimg.com/originals/11/45/f8/1145f83e0576e70339d476ff849673d8.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 12rem;
  .EpisodesPage-header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    span {
      color: #97ce4c;
      padding: 0 10px;
    }
  }
  .EpisodesPage-sort {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .EpisodesPage-article {
    padding: 2rem 0rem;
  }
  .choosePage {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .episodeNumber {
    padding-right: 1rem;
  }
`;

export default EpisodesPage;
