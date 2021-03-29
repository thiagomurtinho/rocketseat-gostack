import styled from "styled-components";
import { shade } from "polished";

import signInBackgroundImg from "../../assets/sign-in-background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      margin-top: 24px;
      display: block;

      text-decoration: none;
      color: #f4ede8;

      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, "#F4EDE8")};
      }
    }
  }

  > a {
    margin-top: 24px;
    display: block;
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #ff9000;

    svg {
      margin-right: 16px;
    }

    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, "#ff9000")};
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
