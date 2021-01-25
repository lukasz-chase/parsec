import React, { useState, useEffect } from "react";
//axios
import axios from "axios";
//styling
import styled from "styled-components";
//material ui
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";

const WholePageComponent = ({ url, item }) => {
  //state
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios.get(url(page)).then((res) => setData(res.data));
  }, [url, page]);
  const handlePages = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
  return (
    <WholePage>
      <div className="WholePage-header">
        <span>
          Here you can find all <b>{item}</b> that were shown in any{" "}
          <b>rick and morty</b> related movies
        </span>
      </div>
      <div className="WholePage-article">
        {data && (
          <div className="WholePage-cards">
            {console.log(data)}
            {data.results.map((results) => (
              <div className="card" key={results.id}>
                <div className="card-image">
                  <img src={results.image} />
                </div>
                <div className="card-info">
                  <h1>{results.name}</h1>
                  <span>
                    <b>gender:</b> {results.gender}
                  </span>
                  <span>
                    <b>species:</b>
                    {results.species}
                  </span>
                  <span>
                    <b>status:</b>
                    {results.status}
                  </span>
                </div>

                <Button color="primary" variant="contained" className="button">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        )}
        {data ? (
          <Pagination
            count={data.info.pages}
            color="primary"
            className="choosePage"
            onChange={handlePages}
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
  padding-bottom: 7.5rem;
  color: #b7e4f9ff;
  background-color: white;
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
