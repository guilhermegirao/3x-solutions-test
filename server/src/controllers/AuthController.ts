import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as Yup from "yup";

import User from "../models/User";

import hasUpperCase from "../utils/hasUpperCase";
import containsNumber from "../utils/containsNumber";
import encryptPassword from "../utils/encryptPassword";

export default {
  async signin(req: Request, res: Response) {
    const { email, password } = req.body;

    const schema = Yup.object().shape({
      email: Yup.string()
        .required("E-mail não informado!")
        .email("Formato de e-mail inválido!"),
      password: Yup.string().required("Senha não informada!"),
    });

    try {
      await schema.validate({ email, password });
    } catch (err) {
      return res.status(400).json({ error: err?.message });
    }

    try {
      const user = await User.findOne({ email }).select("+password");

      if (!user) return res.status(400).json({ error: "E-mail inválido!" });

      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (!passwordMatch)
        return res.status(400).json({ error: "Senha inválida!" });

      const token = jwt.sign(
        { id: user._id },
        process.env.AUTH_SECRET as string,
        { expiresIn: "1d" }
      );

      const { username } = user;

      return res.status(200).json({ username, token });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },

  async signup(req: Request, res: Response) {
    const { username, email, password } = req.body;

    const schema = Yup.object().shape({
      username: Yup.string().required("Nome de Usuário não informado!"),
      email: Yup.string()
        .required("E-mail não informado!")
        .email("Formato de e-mail inválido!"),
      password: Yup.string().required("Senha não informada!"),
    });

    try {
      await schema.validate({ email, password, username });
    } catch (err) {
      return res.status(400).json({ error: err?.message });
    }

    try {
      if (await User.findOne({ email }))
        return res.status(400).json({
          error: "Já existe um usuário com esse e-mail cadastrado!",
        });

      if (!hasUpperCase(password))
        return res.status(400).json({
          error: "A senha precisa conter pelo menos uma letra maiúscula!",
        });

      if (!containsNumber(password))
        return res.status(400).json({
          error: "A senha precisa conter pelo menos um número!",
        });

      const user = await User.create({
        username,
        email,
        password: encryptPassword(password),
      });

      user.password = undefined;

      const token = jwt.sign(
        { id: user._id },
        process.env.AUTH_SECRET as string,
        { expiresIn: "1d" }
      );

      return res.status(200).json({ user, token });
    } catch (err) {
      return res.status(400).json({ error: "Falha ao cadastrar!" });
    }
  },
};
