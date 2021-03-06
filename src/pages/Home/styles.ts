import styled from 'styled-components';

export const LoadingContainer = styled.div`
  flex: 1;

  display: grid;
  justify-content: center;
  align-content: center;

  h1 {
    margin: 0;
  }
`;

export const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  justify-self: center;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: loading1 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: loading2 0.6s infinite;
    }

    &:nth-child(3) {
      left: 32px;
      animation: loading2 0.6s infinite;
    }

    &:nth-child(4) {
      left: 56px;
      animation: loading3 0.6s infinite;
    }
  }

  @keyframes loading1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes loading2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

  @keyframes loading3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
