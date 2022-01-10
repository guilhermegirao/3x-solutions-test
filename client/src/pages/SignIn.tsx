import React from 'react';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Content from '@/components/Content';
import SignInForm from '@/components/SigninForm';
import SignupForm from '@/components/SignupForm';

function SignIn() {
  return (
    <Container>
      <Header />
      <Content>
        <SignInForm />
        <SignupForm />
      </Content>
    </Container>
  );
}

export default SignIn;
