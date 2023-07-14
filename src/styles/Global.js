import { createGlobalStyles } from "goober/global";

const GlobalStyles = createGlobalStyles`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    html,
    body {
        max-width: 100vw;
    }
`;

export default GlobalStyles;
