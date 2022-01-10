import styled from 'styled-components';

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 1px rgba(90, 90, 90, 0.15);
  height: 56px;
  padding: 0 28px;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
    outline: 0;
  }
`;

export default Input;
