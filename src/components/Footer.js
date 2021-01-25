import React from "react";
//styling
import styled from "styled-components";
//icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = () => {
  return (
    <FooterComponent>
      <div className="footer-text">follow star wars:</div>
      <div className="footer-icons">
        <a
          href="https://www.facebook.com/StarWars"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon className="icon" />
        </a>
        <a
          href="https://www.instagram.com/starwars/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="icon" />
        </a>
        <a href="https://twitter.com/starwars" target="_blank" rel="noreferrer">
          <TwitterIcon className="icon" />
        </a>
        <a
          href="https://www.youtube.com/user/starwars/"
          target="_blank"
          rel="noreferrer"
        >
          <YouTubeIcon className="icon" />
        </a>
      </div>
      <div className="footer-rights">
        TM and © Lucasfilm Ltd. All Rights Reserved
      </div>
      <div className="footer-moreInfo">
        <span>Terms of Use</span>
        <span>Additional Content Information</span>
        <span>Privacy Policy</span>
        <span>Children's Online Privacy Policy</span>
        <span>Star Wars at shopDisney</span>
        <span>Star Wars Helpdesk</span>
        <span>Interest-Based Ads</span>
      </div>
    </FooterComponent>
  );
};

const FooterComponent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6d6d6d;
  .footer-text {
    text-transform: upperCase;
  }
  .footer-icons {
    display: flex;
    padding: 1rem 0rem;
    a {
      text-decoration: none;
      color: #6d6d6d;
    }
    .icon {
      margin: 0rem 1rem;
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
