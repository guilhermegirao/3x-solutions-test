import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '@/components/Button/Button';
import Input from '@/components/Input';
import Alert from '@/components/Alert';
import { AuthContext } from '@/contexts/AuthContext';
import errorMessage from '@/utils/errorMessage';
import validatePassword from '@/utils/validatePassword';
import SignupFormContainer from './styles';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const { authenticated, signup } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate('/');
  }, [authenticated]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const schema = Yup.object().shape({
      username: Yup.string().required('Nome de Usuário não informado!'),
      email: Yup.string()
        .required('E-mail não informado!')
        .email('Formato de e-mail inválido!'),
      password: Yup.string().required('Senha não informada!')
    });

    try {
      await schema.validate({ username, email, password });

      if (validatePassword(password)) await signup(email, password, username);
    } catch (err: any) {
      setAlertMessage(errorMessage(err));
    }
  };

  return (
    <SignupFormContainer>
      <h5>Ainda não tem sua conta? Cadastre-se aqui, é rápido e fácil ;)</h5>
      {alertMessage && <Alert>{alertMessage}</Alert>}
      <form method="post" onSubmit={handleSubmit}>
        <Input
          type="username"
          placeholder="Nome de Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Cadastre-se</Button>
      </form>
    </SignupFormContainer>
  );
}

export default SignupForm;
