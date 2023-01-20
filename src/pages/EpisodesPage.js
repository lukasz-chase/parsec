import React, { useState, useEffect, useContext } from "react";
//styling
import styled from "styled-components";
//url
import { episodesUrl } from "../api";
//axios
import axios from "axios";
//icon
import SearchIcon from "@material-ui/icons/Search";
//input
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
//material ui
import Pagination from "@material-ui/lab/Pagination";
//components
import EpisodeCard from "../components/episodeCard";
//context
import modeContext from "../modeContext";
import { useQuery } from "@tanstack/react-query";

const EpisodesPage = () => {
  const { darkModeState } = useContext(modeContext);
  //state
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [episode, setEpisode] = useState("");
  const [textInput, setTextInput] = useState("");

  const { data: episodes } = useQuery({
    queryKey: ["episodes", { page }],
    keepPreviousData: true,
    queryFn: () =>
      axios.get(episodesUrl(page, name, episode)).then((res) => res.data),
  });
  //handlers
  //pagination handler
  const pagesHandler = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };
  //input handler
  const inputHandler = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
    setName(textInput);
  };
  //form handler
  const formHandler = (e) => {
    e.preventDefault();
    setName(textInput);
    setTextInput("");
  };
  //episode number handler
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
        <div className="episodesList">
          {episodes?.results?.map((episode) => (
            <EpisodeCard
              key={episode.id}
              id={episode.id}
              darkModeState={darkModeState}
              episode={episode.episode}
              name={episode.name}
              airDate={episode.air_date}
              characters={episode.characters}
            />
          ))}
        </div>
      </div>
      <Pagination
        count={episodes?.info?.pages}
        color="primary"
        className="choosePage"
        onChange={pagesHandler}
      />
    </EpisodesPageComponent>
  );
};

const EpisodesPageComponent = styled.div`
  padding: 5rem 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 14rem;
  background-color: black;
  background-image: url("https://images4.alphacoders.com/633/thumb-1920-633222.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  @media screen and (max-width: 880px) {
    background-position: 58% 0%;
  }
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
      border-radius: 1rem;
      padding: 0rem 1rem;
    }
    .page-slider {
      padding: 0rem 1rem;
      .number-input {
        width: 6.5rem;
        height: 2.9rem;
        border-radius: 1rem;
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
      width: 35%;
      @media screen and (max-width: 1200px) {
        width: 90%;
      }
      .accordion {
        width: 100%;
        border-radius: 1rem;
      }
    }
  }
  .choosePage {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
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
