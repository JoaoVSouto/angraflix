import styled from 'styled-components';

const CadastroLayout = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 25px 5%;

  h1 {
    margin: 0;
    text-align: center;
    font-size: 40px;
    font-weight: normal;
  }

  form {
    margin-top: 32px;

    div + div {
      margin-top: 32px;
    }
  }

  @media (max-width: 800px) {
    padding-top: 25px;
  }
`;

export default CadastroLayout;
