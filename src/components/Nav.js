import React, { useState } from "react";
//styling
import styled from "styled-components";
//icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Nav = () => {
  const [openMenu, SetOpenMenu] = useState(false);
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
            <li>People</li>
            <li>Films</li>
            <li>Star ships</li>
            <li>Vehicles</li>
            <li>Species</li>
            <li>Planets</li>
          </ul>
        </div>
      </div>
      <div className="navLogo">parsec</div>
    </NavComponent>
  );
};

const NavComponent = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hyades.jpg/1200px-Hyades.jpg");
  justify-content: center;
  color: #ffe81f;
  .hamburgerMenu {
    display: flex;
    flex-direction: column;
    flex: 4;
    .hamburgerMenu-icon {
      padding: 4px;
      .icon {
        &:hover {
          cursor: pointer;
        }
      }
    }
    .hamburgerMenu-list {
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hyades.jpg/1200px-Hyades.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
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
  }
  .navLogo {
    flex: 5;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 2rem;
  }
`;

export default Nav;
