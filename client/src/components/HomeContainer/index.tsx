import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  max-width: ${({ theme }) => theme.screens.md};
  width: 100%;

  & > button {
    margin-top: 96px;
  }
`;

export default HomeContainer;
