import containsNumber from './containsNumber';
import hasUpperCase from './hasUpperCase';

const validatePassword = (password: string) => {
  if (!hasUpperCase(password))
    throw new Error('A senha precisa conter pelo menos uma letra maiúscula!');
  if (!containsNumber(password))
    throw new Error('A senha precisa conter pelo menos um número!');

  return true;
};

export default validatePassword;
