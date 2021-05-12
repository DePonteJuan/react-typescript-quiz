import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import BGImage from "../src/images/jonah-brown.jpg";

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body{
    background-image: url(${BGImage});
    background-size: cover;
    margin:0;
    padding:0 20px;
    display:flex;
    justify-content:center;

  }
  * {
    box-sizing:border-box;
    font-family: 'Catamaran', sans-serif;

  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #000;
  }
  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline, Impact, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-clip: text;
    background-size: 100%;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: center;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
