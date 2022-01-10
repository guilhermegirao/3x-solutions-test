import styled from 'styled-components';

const SigninFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px;
  width: 100%;

  h5 {
    margin-bottom: 32px;
  }

  & > form {
    width: 100%;

    > * {
      margin-bottom: 48px;
    }
  }
`;

export default SigninFormContainer;
