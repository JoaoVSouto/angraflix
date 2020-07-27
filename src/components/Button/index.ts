import styled, { css } from 'styled-components';

const styles = css`
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  ${styles}
`;

export const ButtonLink = styled.a`
  ${styles}
`;
