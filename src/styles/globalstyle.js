import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Globalstyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{
    
    background-color: #FFDC66;
}
`;
