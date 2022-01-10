import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 1px rgba(90, 90, 90, 0.15);
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  height: 56px;
  font-weight: 700;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
    outline: 0;
  }
`;

export default Button;
