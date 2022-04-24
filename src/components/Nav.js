import React, { useState, useContext } from "react";
//styling
import styled from "styled-components";
//icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import TvIcon from "@material-ui/icons/Tv";
import PeopleIcon from "@material-ui/icons/People";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HomeIcon from "@material-ui/icons/Home";
//router
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//components
import DarkMode from "../components/darkMode";
//context
import modeContext from "../modeContext";

const Nav = () => {
  const { darkModeState, setDarkModeState } = useContext(modeContext);
  const [openMenu, SetOpenMenu] = useState(false);
  //get the current location
  const location = useLocation();
  //handlers
  const linkHandler = () => {
    window.scrollTo(0, 0);
    SetOpenMenu(!openMenu);
  };
  return (
    <NavComponent style={{ pointerEvents: openMenu ? "all" : "none" }}>
      <DarkMode
        darkModeState={darkModeState}
        setDarkModeState={setDarkModeState}
      />
      <div className="hamburgerMenu">
        <div className="hamburgerMenu-icon">
          {openMenu ? (
            <CloseIcon
              className="icon"
              fontSize="large"
              onClick={() => {
                SetOpenMenu(!openMenu);
              }}
              style={{ color: "black" }}
            />
          ) : (
            <MenuIcon
              style={{ pointerEvents: "all" }}
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

            backgroundBlendMode: darkModeState ? "luminosity" : "normal",
          }}
        >
          <ul>
            <Link
              to="/"
              className="nav-link"
              style={{
                color: location.pathname === "/" ? "#0c08f7" : "black",
              }}
              onClick={() => linkHandler()}
            >
              <li>
                <HomeIcon /> Home
              </li>
            </Link>
            <Link
              to="/characters"
              className="nav-link"
              style={{
                color:
                  location.pathname === "/characters" ? "#0c08f7" : "black",
              }}
              onClick={() => linkHandler()}
            >
              <li>
                <PeopleIcon /> Characters
              </li>
            </Link>
            <Link
              to="/locations"
              className="nav-link"
              style={{
                color: location.pathname === "/locations" ? "#0c08f7" : "black",
              }}
              onClick={() => linkHandler()}
            >
              <li>
                <LocationOnIcon /> Locations
              </li>
            </Link>
            <Link
              to="/episodes"
              className="nav-link"
              style={{
                color: location.pathname === "/episodes" ? "#0c08f7" : "black",
              }}
              onClick={() => linkHandler()}
            >
              <li>
                <TvIcon /> Episodes
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="navLogo">
        <Link
          to="/"
          className="link"
          style={{ color: "#97ce4c", pointerEvents: "all" }}
        >
          parsec
        </Link>
      </div>
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
    position: absolute;
    left: 0;
    top: 0;
    .hamburgerMenu-icon {
      padding: 1rem;
      z-index: 7;
      .icon {
        &:hover {
          cursor: pointer;
        }
      }
    }
    .hamburgerMenu-list {
      position: absolute;
      left: 0;
      top: 0;
      height: 100vh;
      width: 15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 5;
      background-image: url("https://i.imgur.com/NQnPLKg.png");
      background-color: black;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-position: center;
      transition: 0.3s ease-in-out;
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          padding: 1rem 0rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 1rem;
          &:hover {
            cursor: pointer;
          }
          @media screen and (max-width: 880px) {
            font-size: 1rem;
            padding: 0.5rem 0rem;
          }
        }
      }
    }
    .nav-link {
      text-decoration: none;
      width: 100%;
    }
  }
  .navLogo {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
  }
`;

export default Nav;
