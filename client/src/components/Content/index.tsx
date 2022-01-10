import styled from 'styled-components';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.screens.xl};
  min-height: calc(100vh - 282px);
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    flex: 0;
    flex-direction: column;
  }
`;

export default Content;
