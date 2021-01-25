import React, { useState } from "react";
//styling
import styled from "styled-components";
//icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
//input
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
//router
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const [openMenu, SetOpenMenu] = useState(false);
  //get the current location
  const location = useLocation();
  console.log(location.pathname);
  return (
    <NavComponent>
      <div className="hamburgerMenu">
        <div className="hamburgerMenu-icon">
          {openMenu ? (
            <CloseIcon
              className="icon"
              fontSize="large"
              onClick={() => {
                SetOpenMenu(!openMenu);
              }}
            />
          ) : (
            <MenuIcon
              className="icon"
              fontSize="large"
              onClick={() => {
                SetOpenMenu(!openMenu);
              }}
            />
          )}
        </div>
        <div
          className="hamburgerMenu-list"
          style={{
            transform: openMenu ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <ul>
            <li>
              <Link
                to="/characters"
                className="nav-link"
                style={{
                  color:
                    location.pathname === "/characters"
                      ? "orange"
                      : "#b7e4f9ff",
                }}
              >
                People
              </Link>
            </li>
            <li>
              <Link
                to="/locations"
                className="nav-link"
                style={{
                  color:
                    location.pathname === "/locations" ? "orange" : "#b7e4f9ff",
                }}
              >
                Films
              </Link>
            </li>
            <li>
              <Link
                to="/episodes"
                className="nav-link"
                style={{
                  color:
                    location.pathname === "/episodes" ? "orange" : "#b7e4f9ff",
                }}
              >
                Star ships
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navLogo">
        <Link to="/" className="link" style={{ color: "#97ce4c" }}>
          parsec
        </Link>
      </div>
      {/* <div className="nav-input">
        <TextField
          id="standard-adornment-password"
          label="Search"
          color="secondary"
          className="input-field"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div> */}
    </NavComponent>
  );
};

const NavComponent = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  color: #97ce4c;
  z-index: 6;
  .hamburgerMenu {
    display: flex;
    flex-direction: column;
    flex: 2;
    .hamburgerMenu-icon {
      padding-top: 5px;
      padding-left: 15px;
      .icon {
        &:hover {
          cursor: pointer;
        }
      }
    }
    .hamburgerMenu-list {
      background-color: #97ce4c;
      min-height: 95vh;
      width: 15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 5;
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        li {
          color: #b7e4f9ff;
          width: 100%;
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 2rem 0rem;
          font-size: 1.5rem;
          &:hover {
            cursor: pointer;
          }
          @media screen and (max-height: 600px) {
            padding: 1rem 0rem;
          }
        }
      }
    }
    .nav-link {
      text-decoration: none;
      color: #126388;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .navLogo {
    flex: 2.5;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
  }
  /* .nav-input {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0rem 1rem;
    .input-field {
      background-color: white;
    }
  } */
`;

export default Nav;
