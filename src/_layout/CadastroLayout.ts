import styled from 'styled-components';

const CadastroLayout = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5% 0;

  h1 {
    margin: 0;
  }

  @media (max-width: 800px) {
    padding-top: 25px;
  }
`;

export default CadastroLayout;
