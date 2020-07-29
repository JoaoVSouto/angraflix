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
    resize: none;
    vertical-align: top;
  }

  span {
    position: absolute;
    display: none;
  }
`;
