import React, { useState } from "react";
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

const Nav = ({ darkModeState, setDarkModeState }) => {
  const [openMenu, SetOpenMenu] = useState(false);
  //get the current location
  const location = useLocation();
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
      padding-top: 5px;
      padding-left: 15px;
      .icon {
        &:hover {
          cursor: pointer;
        }
      }
    }
    .hamburgerMenu-list {
      background-image: url("https://i.imgur.com/NQnPLKg.png");
      background-color: black;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-position: center;
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
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 1rem 0rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          background-color: rgba(255, 255, 255, 0.6);

          border-radius: 1rem;
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
