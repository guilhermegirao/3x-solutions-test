import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background: url('/images/header-background.svg') no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 250px;
  justify-content: center;
  margin-bottom: 32px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

export default StyledHeader;
