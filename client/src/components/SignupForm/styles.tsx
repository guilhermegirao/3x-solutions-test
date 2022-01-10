import styled from 'styled-components';

const SignupFormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: column;
  padding: 54px;
  position: relative;
  width: 100%;

  h5 {
    margin-bottom: 32px;
    text-align: center;
  }

  & > form {
    width: 100%;

    > * {
      margin-bottom: 48px;
    }
  }

  &:after {
    background: url('/images/signup-container-border.svg') no-repeat;
    background-size: cover;
    content: '';
    height: 120px;
    position: absolute;
    left: 0;
    bottom: -119px;
    width: 100%;
  }
`;

export default SignupFormContainer;
