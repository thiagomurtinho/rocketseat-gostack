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

    input {
      width: 100%;
      padding: 16px;

      color: #f4ede8;
      background: #232129;
      border: 2px solid #232129;
      border-radius: 10px;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      width: 100%;
      height: 56px;
      padding: 0 16px;
      margin-top: 16px;

      font-weight: 500;
      color: #312e38;
      background: #ff9000;
      border-radius: 10px;
      border: 0;

      transition: 0.2s;
      &:hover {
        background: ${shade(0.2, "#ff9000")};
        color: ${shade(0.5, "#312e38")};
      }
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
