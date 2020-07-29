import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

  img {
    max-height: 80px;
    margin-top: -24px;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
