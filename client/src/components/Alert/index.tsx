import styled from 'styled-components';

const Alert = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.red};
  border-radius: 10px;
  box-shadow: 0px 4px 4px 1px rgba(90, 90, 90, 0.15);
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  font-weight: 700;
  height: 56px;
  margin-bottom: 32px;
  overflow: hidden;
  padding: 0 28px;
  width: 100%;
`;

export default Alert;
