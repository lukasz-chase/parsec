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
    background-image: url("https://images5.alphacoders.com/876/thumb-1920-876590.png");
    background-color: black;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 1800px) {
    background-position: 0% 50%;
  }
    @media screen and (max-width: 880px) {
    background-position: 63% 50%;
  }

}
.link{
    text-decoration:none;
    color:#B7E4F9FF;
    text-shadow:1px 1px black;
}
`;

export default GlobalStyles;
