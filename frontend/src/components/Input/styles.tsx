import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;

  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;

    color: #f4ede8;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
