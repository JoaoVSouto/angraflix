import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    display: block;
  }

  input {
    width: 100%;
    color: var(--grayLight);
    background-color: #53585d;
    border: 0;
    border-radius: 4px;
    outline: none;
    padding: 16px;
    padding-top: 28px;
    padding-bottom: 12px;
    font-size: 18px;

    &[type='color'] {
      padding: 23px;
      appearance: none;
      -webkit-appearance: none;

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: 0;
      }

      &::-moz-color-swatch {
        opacity: 0;
      }
    }

    &:focus,
    &.filled {
      &[type='color'] {
        + span {
          transform: translateY(-15px);
        }
      }

      + span {
        font-size: 12px;
        transform: translateY(-20px);
        color: var(--grayMedium);
      }
    }
  }

  .color-swatch {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    position: absolute;
    height: 80%;
    width: 80%;
    pointer-events: none;

    @media (max-width: 800px) {
      width: 50%;
    }
  }

  span {
    position: absolute;
    display: block;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    transition: all 0.3s;
  }
`;
