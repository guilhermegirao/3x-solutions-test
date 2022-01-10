import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '@/components/Button/Button';
import Input from '@/components/Input';
import Alert from '@/components/Alert';
import { AuthContext } from '@/contexts/AuthContext';
import errorMessage from '@/utils/errorMessage';
import SigninFormContainer from './styles';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const { authenticated, signin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate('/');
  }, [authenticated]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const schema = Yup.object().shape({
      email: Yup.string()
        .required('E-mail não informado!')
        .email('Formato de e-mail inválido!'),
      password: Yup.string().required('Senha não informada!')
    });

    try {
      await schema.validate({ email, password });
      await signin(email, password);
    } catch (err: any) {
      setAlertMessage(errorMessage(err));
    }
  };

  return (
    <SigninFormContainer>
      <h5>Acesse sua conta</h5>
      {alertMessage && <Alert>{alertMessage}</Alert>}
      <form method="post" onSubmit={handleSubmit}>
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
        <Button type="submit">Entrar</Button>
      </form>
    </SigninFormContainer>
  );
}

export default SignInForm;
