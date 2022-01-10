import React, { useContext } from 'react';

import Container from '@/components/Container';
import Header from '@/components/Header';
import Content from '@/components/Content';
import Button from '@/components/Button/Button';
import HomeContainer from '@/components/HomeContainer';
import useFetch from '@/hooks/useFetch';
import UserData from '@/@types/UserData';
import { AuthContext } from '@/contexts/AuthContext';

function Home() {
  const { signout } = useContext(AuthContext);
  const { loading, data } = useFetch<UserData>('/users/find/by/user-logged');

  const handleSignout = () => signout();

  return (
    <Container>
      <Header />
      <Content>
        <HomeContainer>
          {loading ? (
            <h4>Carregando suas informações...</h4>
          ) : (
            <>
              <h4>Seja bem-vindo {data?.user?.username}!</h4>
              <Button onClick={handleSignout}>Sair</Button>
            </>
          )}
        </HomeContainer>
      </Content>
    </Container>
  );
}

export default Home;
