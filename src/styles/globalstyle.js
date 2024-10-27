import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Globalstyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
    color: inherit;
}
li,ul,ol{
    list-style: none;
}
body{
    background-color: #FFDC66;
    font-family: 'LINESeedKR-Bd';
}
`;
