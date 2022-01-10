import React from 'react';
import Container from '@/components/Container';
import Content from '@/components/Content';
import Header from '@/components/Header';

function NotFound() {
  return (
    <Container>
      <Header />
      <Content>
        <h2>Página não encontrada :(</h2>
      </Content>
    </Container>
  );
}

export default NotFound;
