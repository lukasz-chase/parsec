import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
.App{
    position: relative;
}
body{
    background-color:black;
}
.link{
    text-decoration:none;
    color:#ffe81f;
}
`;

export default GlobalStyles;
