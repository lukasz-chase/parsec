import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
.App{
    position: relative;
    font-family: 'Roboto', sans-serif;
    background-image: url("https://i.imgur.com/SMoMX1q.jpg");
    background-color: black;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center 40%;
    background-size: cover;
    @media screen and (max-width: 880px) {
    background-position: 30% 100%;
  }

}
.link{
    text-decoration:none;
    color:#B7E4F9FF;
    text-shadow:1px 1px black;
}
`;

export default GlobalStyles;
