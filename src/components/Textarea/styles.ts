import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    display: block;
  }

  textarea {
    width: 100%;
    color: var(--grayLight);
    background-color: #53585d;
    border: 0;
    border-radius: 4px;
    outline: none;
    padding: 16px;
    padding-top: 28px;
    font-size: 18px;
    resize: none;
    vertical-align: top;

    &:focus,
    &.filled {
      + span {
        font-size: 12px;
        transform: translateY(-32px);
        color: var(--grayMedium);
      }
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
