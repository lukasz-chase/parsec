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
    background-image: url("https://www.freepnglogos.com/uploads/rick-and-morty/rick-and-morty-background-rick-morty-and-man-sky-mashup-wallpaper-taken-from-4.png");
    background-color: black;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    @media screen and (max-width: 880px) {
    background-position: 45% 50%;
  }

}
.link{
    text-decoration:none;
    color:#B7E4F9FF;
    text-shadow:1px 1px black;
}
`;

export default GlobalStyles;
