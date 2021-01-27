import React from "react";
//styling
import styled from "styled-components";
//icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <FooterComponent>
      <div className="footer-text">follow rick and morty:</div>
      <div className="footer-icons">
        <a
          href="https://www.facebook.com/RickandMorty/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon className="icon" />
        </a>
        <a
          href="https://www.instagram.com/rickandmorty/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="icon" />
        </a>
        <a
          href="https://twitter.com/rickandmorty"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon className="icon" />
        </a>
      </div>
      <div className="footer-moreInfo">
        <span>Terms of Use</span>
        <span>Additional Content Information</span>
        <span>Privacy Policy</span>
        <span>Children's Online Privacy Policy</span>
        <span>Interest-Based Ads</span>
      </div>
    </FooterComponent>
  );
};

const FooterComponent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px black;
  .footer-text {
    text-transform: upperCase;
  }
  .footer-icons {
    display: flex;
    padding: 1rem 0rem;
    a {
      text-decoration: none;
      color: white;
    }
    .icon {
      margin: 0rem 1rem;
      transition: 0.2s ease-in all;
      &:hover {
        color: #b4b4b4;
      }
    }
  }
  .footer-moreInfo {
    padding: 1rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    span {
      padding: 0rem 1rem;
      border-right: 1px solid #6d6d6d;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;

export default Footer;
