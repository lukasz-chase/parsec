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
    background-image: url("https://images6.alphacoders.com/909/thumb-1920-909641.png");
    background-color: black;
    
}
.link{
    text-decoration:none;
    color:#B7E4F9FF;
    text-shadow:1px 1px black;
}
`;

export default GlobalStyles;
