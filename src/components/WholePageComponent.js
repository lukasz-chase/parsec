import React, { useState, useEffect, useRef } from "react";
//axios
import axios from "axios";
//styling
import styled from "styled-components";
//icon
import SearchIcon from "@material-ui/icons/Search";
//input
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
//material ui
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
//link
import { Link } from "react-router-dom";

const WholePageComponent = ({ url, item, characters, locations }) => {
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
              <option value="">status</option>
              <option value="alive">alive</option>
              <option value="dead">dead</option>
              <option value="unknown">unknown</option>
            </select>
          </div>
        )}
      </div>
      <div className="WholePage-article">
        {data ? (
          <div className="WholePage-cards">
            {console.log(data)}
            {data.results.map((results) => (
              <div className="card" key={results.id}>
                {results.image && (
                  <div className="card-image">
                    <img src={results.image} alt={results.name} />
                  </div>
                )}
                <div className="card-info">
                  <h1>{results.name}</h1>
                  {results.gender && (
                    <span>
                      <b>gender:</b> {results.gender}
                    </span>
                  )}
                  {results.type && (
                    <span>
                      <b>Type:</b> {results.type}
                    </span>
                  )}
                  {results.species && (
                    <span>
                      <b>species:</b>
                      {results.species}
                    </span>
                  )}
                  {results.status && (
                    <span>
                      <b>status:</b>
                      {results.status}
                    </span>
                  )}
                  {results.dimension && (
                    <span>
                      <b>dimension:</b>
                      {results.dimension}
                    </span>
                  )}
                </div>
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
                    variant="contained"
                    className="button"
                  >
                    Learn More
                  </Button>
                </Link>
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
    }
    .page-select {
      padding: 1rem;

      select {
        font-size: 1.5rem;
        &:hover {
          cursor: pointer;
        }
        option {
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
      min-height: 20rem;
      min-width: 15rem;
      border-radius: 2rem;
      margin: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      .card-image {
        img {
          height: 40vh;
          width: 40vh;
        }
      }
      .card-info {
        display: flex;
        flex-direction: column;
        h2 {
          font-size: 1.5rem;
        }
        b {
          color: #35abe2;
        }
        span {
          color: #b7e4f9ff;
          padding: 5px 0;
        }
      }
    }
    .choosePage {
      background-color: white;
    }
  }
`;

export default WholePageComponent;
