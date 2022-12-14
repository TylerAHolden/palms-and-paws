import { styled } from 'goober';

export const Button = styled('button')`
  border-radius: 50px;
  padding: 8px 26px;
  outline: none;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  p {
    font-weight: 600;
    margin: 0;
    margin-top: 1px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-size: 15px;

    @media (max-width: 1300px) {
      font-size: 14px;
    }
    @media (max-width: 900px) {
      font-size: 13px;
    }
  }
`;
