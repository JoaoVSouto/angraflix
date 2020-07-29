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

  strong a {
    text-decoration: none;
    display: inline-flex;

    &:hover,
    &:focus {
      svg {
        transform: translate(3px, -3px);
      }
    }

    svg {
      margin-left: 4px;
      transition: transform 0.1s linear;
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
