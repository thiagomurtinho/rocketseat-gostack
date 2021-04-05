import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
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
    background: ${shade(0.2, '#ff9000')};
    color: ${shade(0.5, '#312e38')};
  }
`;
