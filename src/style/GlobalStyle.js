import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "HakgyoansimNadeuriTTF-B";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimNadeuriTTF-B.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "NanumSquareRound";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  html{
        font-size:10px;
        box-sizing:border-box;
    }
  body{
  font-family: "NanumSquareRound", "HakgyoansimNadeuriTTF-B", sans-serif;
    }
`;
