import bcrypt from "bcrypt";

const encryptPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(password, salt);
};

export default encryptPassword;
