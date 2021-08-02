import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

html {
    @media (max-width: 1300px){
        font-size: 60%;
        overflow-x: hidden;
    }
}

body{
    font-family: 'Quicksand', sans-serif;
    font-size: 2rem; 
    background: #1b1b1b;
    overflow-x: hidden;
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #e74e16;
    border-radius: 16px;
    background: transparent;
    color: white;
    transition : all 0.5s ease;
    &:hover{
        background-color: #e74e16;
        color: whitesmoke;
    }    
}

h2 {
    font-weight: lighter;
    font-size: 4rem;
    color:whitesmoke;
}
    
h3 {
    color: #e74e16;
}

h4 {
    font-weight: lighter;
    font-size: 2rem;
    color: #e74e16;
}

span {
    font-weight: bold;
    color: #e74e16;
}
    
p {
    padding: 2rem 0rem;
    color: whitesmoke;
    font-size: 1.4rem;
    line-height: 150%;
}

`;

// Export Global Style
export default GlobalStyle;
