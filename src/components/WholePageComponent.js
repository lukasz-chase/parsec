import React, { useState, useEffect, useRef } from "react";
//axios
import axios from "axios";
//styling
import styled from "styled-components";
//icon
import SearchIcon from "@material-ui/icons/Search";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
//input
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
//material ui
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
//link
import { Link } from "react-router-dom";

const WholePageComponent = ({
  url,
  item,
  characters,
  locations,
  darkModeState,
}) => {
  //state
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [textInput, setTextInput] = useState("");
  const [status, setStatus] = useState("");
  //ref
  const selectRef = useRef(null);
  //useEffect
  useEffect(() => {
    axios.get(url(page, name, status)).then((res) => setData(res.data));
  }, [url, page, name, status]);
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
  const selectHandler = () => {
    setStatus(selectRef.current.options[selectRef.current.selectedIndex].value);
  };
  const statusHandler = (status) => {
    if (status === "Alive") {
      return (
        <FiberManualRecordIcon style={{ color: "green", fontSize: "10" }} />
      );
    } else if (status === "Dead") {
      return (
        <FiberManualRecordIcon
          style={{ color: "red", fontSize: "10" }}
          fontSize="small"
        />
      );
    }
  };
  const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff",
      },
    },
  }));
  const classes = useStyles();
  return (
    <WholePage>
      <div className="WholePage-header">
        <span>
          Here you can find all <b>{item}</b> that were shown in any{" "}
          <b>rick and morty</b> related movies
        </span>
      </div>
      <div className="WholePage-sort">
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
        {characters && (
          <div className="page-select">
            <select ref={selectRef} defaultValue="" onChange={selectHandler}>
              <option value="">Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        )}
      </div>
      <div className="WholePage-article">
        {data ? (
          <div className="WholePage-cards">
            {data.results.map((results) => (
              <div
                className="card"
                key={results.id}
                style={{
                  backgroundColor: darkModeState
                    ? "rgba(0, 0, 0, 0.9)"
                    : "rgba(0, 0, 0, 0.7)",
                }}
              >
                {results.image && (
                  <div className="card-image">
                    <img src={results.image} alt={results.name} />
                  </div>
                )}
                <div
                  className="card-info"
                  style={{ width: locations ? "100%" : "50%" }}
                >
                  <h1>{results.name}</h1>

                  {results.species && (
                    <span>
                      {statusHandler(results.status)}
                      {results.status} - <b> {results.species}</b>
                    </span>
                  )}
                  {locations && (
                    <span>
                      <b>Type:</b> {results.type}
                    </span>
                  )}
                  {results.dimension && (
                    <span>
                      <b>dimension:</b>
                      {results.dimension}
                    </span>
                  )}
                  <Link
                    className="link"
                    to={
                      characters
                        ? `/character/${results.id}`
                        : `/location/${results.id}`
                    }
                  >
                    <Button
                      color="primary"
                      variant="outlined"
                      className="button"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="elements-not-found">
            We couldn't find anything matching this criteria
          </div>
        )}
        {data ? (
          <Pagination
            count={data.info.pages}
            color="primary"
            classes={{ ul: classes.ul }}
            className="choosePage"
            onChange={pagesHandler}
          />
        ) : (
          ""
        )}
      </div>
    </WholePage>
  );
};

const WholePage = styled.div`
  min-height: 45vw;
  padding-top: 5rem;
  padding-bottom: 12rem;
  color: #b7e4f9ff;
  text-shadow: 1px 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  flex-direction: column;
  .WholePage-header {
    display: flex;
    justify-content: center;
    span {
      b {
        color: #d2bc00;
      }
    }
  }
  .WholePage-sort {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 1rem 0rem;
    .page-input {
      background-color: white;
      padding: 0rem 1rem;
      border-radius: 1rem;
    }
    .page-select {
      padding: 1rem;
      select {
        border-radius: 1rem;
        padding: 7px;
        font-size: 1.5rem;
        font-family: "Roboto", sans-serif;
        &:hover {
          cursor: pointer;
        }
        option {
          border-radius: 1rem;
          &:checked {
            background: #97ce4c !important;
          }
        }
      }
    }
  }
  .WholePage-article {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    .WholePage-cards {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
    }
    .card {
      height: 15rem;
      width: 30rem;
      border-radius: 2rem;
      margin: 1rem;
      display: flex;
      align-items: center;
      text-align: center;
      @media screen and (max-width: 1200px) {
        height: 10rem;
        width: 20rem;
      }
      @media screen and (max-width: 880px) {
        height: 7rem;
        width: 12rem;
        margin: 0.2rem;
      }
      .card-image {
        width: 50%;
        display: flex;
        align-items: center;
        img {
          height: 15rem;
          object-fit: cover;
          width: 100%;
          border-radius: 2rem 0 0 2rem;
          @media screen and (max-width: 1200px) {
            height: 10rem;
          }
          @media screen and (max-width: 880px) {
            height: 7rem;
          }
        }
      }
      .card-info {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1 {
          font-size: 2rem;
          @media screen and (max-width: 1200px) {
            font-size: 1rem;
          }
          @media screen and (max-width: 880px) {
            font-size: 0.7rem;
          }
        }
        b {
          color: #97ce4c;
          padding: 0 4px;
        }
        span {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          font-size: 1rem;
          color: #b7e4f9ff;
          padding: 10px 0;
          @media screen and (max-width: 1200px) {
            font-size: 0.7rem;
          }
          @media screen and (max-width: 880px) {
            font-size: 0.5rem;
            padding: 2px 0;
          }
        }
      }
      .button {
        color: black;
        height: 3rem;
        width: 7rem;
        padding: 0 !important;
        @media screen and (max-width: 1200px) {
          height: 2rem;
          width: 5rem;
        }
        @media screen and (max-width: 880px) {
          height: 1rem;
          width: 1rem;
        }
      }
    }
    .choosePage {
      margin: 1rem 0rem;
    }
  }
`;

export default WholePageComponent;
